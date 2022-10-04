declare module '*.svg' {
  import {FunctionComponent, SVGProps} from 'react'
  export const ReactComponent: FunctionComponent<SVGProps<SVGElement>>
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
