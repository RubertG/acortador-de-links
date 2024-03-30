'use client'

import { SearcherLinksAdmin } from './searcher-links'
import { UserRowTable } from './user-row-table'
import { NAME_CHECKBOX } from '@/types/const'
import { LoadingIcon } from './icons'
import { ConfirmPopup } from './confirm-popup'
import { ButtonCheck } from './button-check'
import { useHandlingUserTable } from '@/hooks/use-handling-user-table'
import { DeleteButton } from './delete-button'

const theads = ['URL', 'URL abreviada', 'Estadísticas']

export const UserLinksTable = () => {
  const {
    callbackSearcher, deleteLinks, handleClick,
    handlePopup, isSelectedLinks, loading,
    searchRef, popup, isSelectedParent, stateLinks
  } = useHandlingUserTable()

  return (
    <section className="container mx-auto max-w-5xl px-3 xl:p-0">
      <ConfirmPopup
        cancel={handlePopup}
        deleteLink={deleteLinks}
        isActivated={popup} />
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-table shadow-Terziary/50 border border-Terziary">
        <div className="w-full overflow-x-auto">
          <header
            ref={searchRef}
            className='flex items-center justify-between border-b border-Terziary'
          >
            <SearcherLinksAdmin callback={callbackSearcher} />
            <DeleteButton
              handlePopup={handlePopup}
              isSelectedLinks={isSelectedLinks}
              className='mr-3 md:mr-4'
            />
          </header>
          <table className="w-full">
            <thead>
              <tr className="text-md font-medium tracking-wide text-left text-gray-200 bg-secondary border-b border-Terziary">
                <th
                  className="border-r border-Terziary last:border-r-0 h-full"
                >
                  <div
                    className='grid place-content-center '
                  >
                    <ButtonCheck
                      id={NAME_CHECKBOX.parent}
                      name={NAME_CHECKBOX.parent}
                      isActive={isSelectedParent}
                      onClick={handleClick}
                    />
                  </div>
                </th>
                {
                  theads.map(text => (
                    <th className="px-3 py-2 md:px-4 md:py-3 border-r text-center border-Terziary last:border-r-0" key={text}>{text}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                (stateLinks.filterLinks.length === 0 && !loading)
                  ? (
                    <tr className="text-md font-medium tracking-wide text-left text-gray-300 border-Terziary">
                      <td className="px-3 py-2 md:px-4 md:py-3 text-center text-sm" colSpan={4}>No has creado links aún :(</td>
                    </tr>
                    )
                  : (
                      stateLinks.filterLinks?.map(link => (
                      <UserRowTable
                        link={link}
                        handleClick={handleClick}
                        key={link.id} />
                      ))
                    )
              }
              {
                (loading && stateLinks.filterLinks.length === 0) && (
                  <tr className="text-md font-medium tracking-wide text-left text-gray-300 border-Terziary">
                    <td
                      className="px-3 py-6"
                      colSpan={4}>
                      <LoadingIcon className='w-20 m-auto' loading={true} />
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
