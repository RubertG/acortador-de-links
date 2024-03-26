import { type FC } from 'react'

interface Props {
  className?: string
}

export const Footer: FC<Props> = ({ className = '' }) => {
  return (
    <footer
      className={`${className} text-sm text-gray-400 max-w-5xl m-auto text-center py-4 px-3`}
    >
      Desarrollado por <a
        href="https://www.linkedin.com/in/rubert-gonzalez-8782b8252/"
        className="hover:text-white font-medium transition-colors"
      >Rubert Gonzalez</a>
    </footer>
  )
}
