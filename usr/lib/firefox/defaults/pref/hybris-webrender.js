// Copyright 2023-2025 Eugenio "g7" Paolantonio <me@medesimo.eu>
// SPDX-License-Identifier: MPL-2.0

// webrender compositor
pref('gfx.webrender.compositor', true);
pref('gfx.webrender.compositor.force-enabled', true);
pref('gfx.webrender.compositor.fallback.software', false);

// webrender misc
pref('gfx.webrender.precache-shaders', true);
pref('gfx.webrender.allow-partial-present-buffer-age', false);

// layers
pref("layers.acceleration.disabled", false);
pref('layers.acceleration.force-enabled', true);
pref('layers.gpu-process.enabled', true);
pref('layers.gpu-process.force-enabled', true);
