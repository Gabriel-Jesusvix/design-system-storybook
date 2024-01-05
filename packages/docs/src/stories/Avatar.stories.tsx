import { Avatar, AvatarProps } from '@gjconsultoriati/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabriel-jesusvix.png',
    alt: 'Gabriel Jesus',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}