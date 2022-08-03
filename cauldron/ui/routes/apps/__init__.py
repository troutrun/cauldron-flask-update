import mimetypes
import os

import cauldron
import flask
from cauldron.ui import configs as ui_configs

blueprint = flask.Blueprint(
    name='app',
    import_name=__name__,
    url_prefix='{}/app'.format(ui_configs.ROOT_PREFIX)
)


def _get_app_path(route: str) -> str:
    """Returns application resource path."""
    return os.path.realpath(os.path.join(
        os.path.dirname(cauldron.__file__),
        'resources', 'app', *route.split('/')
    ))


@blueprint.route('/', defaults={'route': 'index.html'}, methods=['GET'])
@blueprint.route('/<path:route>', methods=['GET'])
def view(route: str):
    """
    Retrieves the contents of the file specified by the view route if it
    exists.
    """
    path = _get_app_path(route)
    if not os.path.exists(path):
        return '', 204

    return flask.send_file(
        path,
        mimetype=mimetypes.guess_type(path)[0],
        max_age=-1
    )
