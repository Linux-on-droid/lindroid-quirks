// Doesn't do anything but reserve some TLS spaces.
// Intended to be LD_PRELOAD'ed, so that it stays early in TLS assignment,
// where bionic believes to has full control.
//
// Not really copyright-able.

thread_local void * tls_padding[16];
