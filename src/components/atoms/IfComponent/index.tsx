'use client'
import React, { ReactNode } from 'react';

export function IfComponent({ show, hidden, children }: { show?: boolean, hidden?: boolean, children: ReactNode }) {
  if (show === true || hidden === false)
    return children

}