'use client'

import {
  GithubLogo,
  Envelope,
  LinkedinLogo
} from '@phosphor-icons/react'

export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
  switch (name) {
    case 'github':
      return <GithubLogo size={size} weight="duotone" />;
    case 'email':
      return <Envelope size={size} weight="duotone" />;
    case 'linkedin':
      return <LinkedinLogo size={size} weight="duotone" />;
    default:
      return null
  }
}