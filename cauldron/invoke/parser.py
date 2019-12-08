import textwrap
from argparse import ArgumentParser

from cauldron import ui
from cauldron.cli.server import run as server_run


def add_view_action(sub_parser: ArgumentParser) -> ArgumentParser:
    """Populates the sub parser with the view arguments."""
    sub_parser.add_argument('path')
    return sub_parser


def add_ui_action(sub_parser: ArgumentParser) -> ArgumentParser:
    """Populates the sub parser with the UI kernel/server arguments."""
    return ui.create_parser(sub_parser)


def add_ui_containerized_action(sub_parser: ArgumentParser) -> ArgumentParser:
    """Populates the sub parser with the container launch kernel arguments."""
    sub_parser.add_argument(
        '-d', '--directory',
        dest='notebooks_directory',
        default='.',
        help=textwrap.dedent(
            """
            Specifies the directory to map into the /notebooks directory
            of the UI container, making that directory and its descendents
            available to the container. By default this will be the current
            directory.
            """
        )
    )
    sub_parser.add_argument('--remote', help=textwrap.dedent(
        """
        Specifies the remote SSH tunnel to create inside the UI container
        for remote kernel access. The format should be user@host-name:port.
        If port is not specified the default Cauldron kernel port of 5010
        will be used instead.
        """
    ))
    sub_parser.add_argument('--ssh-key', help=textwrap.dedent(
        """
        Specifies the name of the SSH key to use in authenticating the
        creation of an SSH tunnel for remote kernel execution. This
        parameter is only used in combination with the --remote parameter
        and will be ignored if --remote is not set. The necessary SSH key
        should be mounted into the container's /host_ssh directory and this
        parameter should specify the name of the key within that directory.
        """
    ))
    sub_parser.add_argument(
        '--port',
        type=int,
        help=textwrap.dedent(
            """
            Specifies the port that the UI should be made available on.
            If not specified an open port will be used instead.
            """
        )
    )
    return sub_parser


def add_kernel_action(sub_parser: ArgumentParser) -> ArgumentParser:
    """Populates the sub parser with the kernel/server arguments"""
    return server_run.create_parser(sub_parser)


def add_shell_action(sub_parser: ArgumentParser) -> ArgumentParser:
    """Populates the sub parser with the shell arguments"""
    sub_parser.add_argument(
        '-p', '--project',
        dest='project_directory',
        type=str,
        default=None
    )

    sub_parser.add_argument(
        '-l', '--log',
        dest='logging_path',
        type=str,
        default=None
    )

    sub_parser.add_argument(
        '-o', '--output',
        dest='output_directory',
        type=str,
        default=None
    )

    sub_parser.add_argument(
        '-s', '--shared',
        dest='shared_data_path',
        type=str,
        default=None
    )

    return sub_parser


def parse(args: list = None) -> dict:
    """
    Parses the command line arguments and returns a dictionary containing the
    results.

    :param args:
        The command line arguments to parse. If None, the system command line
        arguments will be used instead.
    """
    parser = ArgumentParser(description='Cauldron command')

    parser.add_argument(
        '-v', '--version',
        dest='show_version_info',
        default=False,
        action='store_true',
        help='show Cauldron version and exit'
    )

    sub_parsers = parser.add_subparsers(
        dest='command',
        title='Sub-Command Actions',
        description='The actions you can execute with the cauldron command',
    )

    sub_parsers.add_parser('shell', aliases=['version'])
    add_shell_action(sub_parsers.add_parser('shell'))
    add_kernel_action(sub_parsers.add_parser('kernel', aliases=['serve']))
    add_ui_action(sub_parsers.add_parser('ui'))
    add_view_action(sub_parsers.add_parser('view'))
    add_ui_containerized_action(sub_parsers.add_parser('uidocker'))

    arguments = vars(parser.parse_args(args=args or ['shell']))
    arguments['parser'] = parser
    return arguments
