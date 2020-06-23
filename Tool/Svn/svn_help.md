# svn help

## svn -h tips
    svn <subcommand> [options] [args]
    Subversion command-line client, version 1.8.11.
    Type 'svn help <subcommand>' for help on a specific subcommand.
    Type 'svn --version' to see the program version and RA modules 
    or 'svn --version --quiet' to see just the version number.

    Most subcommands take file and/or directory arguments, recursing on the directories.  
    If no arguments are supplied to such a command, it recurses on the current directory (inclusive) by default.

## Available subcommands
    Available subcommands:
    add
    blame (praise, annotate, ann)
    cat
    changelist (cl)
    checkout (co)
    cleanup
    commit (ci)
    copy (cp)
    delete (del, remove, rm)
    diff (di)
    export
    help (?, h)
    import
    info
    list (ls)
    lock
    log
    merge
    mergeinfo
    mkdir
    move (mv, rename, ren)
    patch
    propdel (pdel, pd)
    propedit (pedit, pe)
    propget (pget, pg)
    proplist (plist, pl)
    propset (pset, ps)
    relocate
    resolve
    resolved
    revert
    status (stat, st)
    switch (sw)
    unlock
    update (up)
    upgrade


## Global options:
    --username ARG           : specify a username ARG
    --password ARG           : specify a password ARG
    --no-auth-cache          : do not cache authentication tokens
    --non-interactive        : do no interactive prompting (default is to prompt
                                only if standard input is a terminal device)
    --force-interactive      : do interactive prompting even if standard input
                                is not a terminal device
    --trust-server-cert      : accept SSL server certificates from unknown
                                certificate authorities without prompting (but only
                                with '--non-interactive')
    --config-dir ARG         : read user configuration files from directory ARG
    --config-option ARG      : set user configuration option in the format:
                                    FILE:SECTION:OPTION=[VALUE]
                                For example:
                                    servers:global:http-library=serf



