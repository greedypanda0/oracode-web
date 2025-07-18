"use client";

import * as React from "react";
import { NextIntlClientProvider } from "next-intl";

export function IntlProvider({ children, ...props }) {
  return <NextIntlClientProvider {...props}>{children}</NextIntlClientProvider>;
}
