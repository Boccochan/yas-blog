import React from 'react'

interface Props {
  els: HTMLElement[]
  focus: number
}

const Menu = ({ els, focus }: Props) => {
  return (
    <nav className="h-full sticky top-0">
      <ol className="h-full">
        {els.map((el, index) => {
          const style = `p-${(Number(el.tagName.slice(1)) - 1) *
            2} hover:bg-gray-200 text-xs text-gray-600 font-bold py-2`

          const className =
            focus == index ? `${style} bg-gray-200 text-gray-800` : style

          return (
            <li key={index} className={className}>
              <a href={el.id}>{el.innerText}</a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Menu
