import os

from cauldron import environ
from cauldron.ui.statuses import _utils


def _mark_dirty_after(step_data: dict, timestamp: float) -> dict:
    """
    Modifies the step_data to mark it dirty if the step data is for
    a remote project and the remote file (on the local system) has
    been modified more recently than it has been synchronized to the
    kernel system.
    """
    path = step_data.get('remote_source_path')
    status = step_data.get('status')
    if not path or not status:
        return step_data

    try:
        file_modified = os.path.getmtime(path)
    except FileNotFoundError:
        file_modified = 0

    is_dirty = (
        status.get('dirty', False)
        or not os.path.exists(path)
        or timestamp < file_modified
    )
    step_data.update(dirty=is_dirty)
    status.update(
        dirty=is_dirty,
        is_dirty=is_dirty,
        file_modified=file_modified
    )
    return step_data


def localize_dirty_steps(project_data: dict) -> dict:
    """..."""
    if not project_data:
        return project_data

    last_timestamp = environ.remote_connection.sync_timestamp
    project_data['steps'] = [
        _mark_dirty_after(s, last_timestamp)
        for s in project_data.get('steps') or []
    ]
    return project_data


def merge_local_state(remote_status: dict, force: bool) -> dict:
    """..."""
    # Steps modified locally should be identified as dirty
    # or the status display.
    remote_status['data']['project'] = localize_dirty_steps(
        remote_status['data'].get('project')
    )

    # We care about the local remote connection, which is active,
    # not the remote one.
    remote_status['data']['remote'] = environ.remote_connection.serialize()

    # We care about the local viewer, not the remote one.
    remote_status['data']['view'] = environ.view

    remote_status['hash'] = _utils.get_digest_hash(remote_status, force)
    return remote_status
