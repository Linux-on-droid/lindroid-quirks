#!/bin/sh

# Avoid adding value twice if nested.
case "$LD_PRELOAD" in
    *libtls-padding.so*)
        return
    ;;
esac

# See https://unix.stackexchange.com/a/162893
export LD_PRELOAD=libtls-padding.so${LD_PRELOAD:+:${LD_PRELOAD}}
