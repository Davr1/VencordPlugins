/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

const CHANNEL_OBFUSCATE = 1 << 15;

export default definePlugin({
  name: "NoChannelObfuscation",
  description: "Disables channel name obfuscation",
  authors: [{ id: 457579346282938368n, name: "Davri (BLZ)" }],
  patches: [
    {
      find: "doIdentify",
      replacement: {
        match: /capabilities:/,
        replace: `capabilities:~${CHANNEL_OBFUSCATE}&`,
      },
    },
  ],
});
