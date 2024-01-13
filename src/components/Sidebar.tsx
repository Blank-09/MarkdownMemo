import React from 'react'
import profile from '../assets/profile.jpg'

import { BsList, BsSearch, BsAppIndicator } from 'react-icons/bs'

import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from './ModeToggle'

type Props = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<Props> = (props) => {
  const [notes, setNotes] = React.useState([])

  return (
    <aside
      className={'flex flex-col h-full p-3 w-full  transition-all duration-300'}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2">
          <h2 className="flex items-center">
            <BsAppIndicator className="mr-2" /> MarkdownMemo
          </h2>
          <div>
            <button onClick={() => props.setSidebarOpen((prev) => !prev)}>
              <BsList className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
              <BsSearch className="w-5 h-5 opacity-50" />
            </button>
          </span>
          {/* <Input /> */}
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm bg-neutral-100 border dark:border-transparent rounded-md focus:outline-none dark:bg-neutral-800 dark:text-neutral-100 focus:dark:bg-neutral-900"
          />
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {notes.map((item, index) => (
              <li key={index} className="rounded-sm">
                <NavLink
                  rel="noopener noreferrer"
                  to={item.link}
                  className="flex items-center p-2 space-x-3 rounded-md font-normal border border-transparent hover:bg-neutral-900 hover:text-white text-neutral-400"
                >
                  <item.icon className="w-4 h-4 fill-current" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto ml-auto">
        <ModeToggle />
      </div>
      <div className="flex items-center p-2 space-x-4 justify-self-end">
        <img
          src={profile}
          alt="profile"
          className="w-12 h-12 rounded-lg dark:bg-neutral-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Priyanshu T</h2>
          <span className="flex items-center space-x-1">
            <Link
              rel="noopener noreferrer"
              to="/profile"
              className="text-xs dark:text-neutral-400 hover:underline"
            >
              View profile
            </Link>
          </span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
