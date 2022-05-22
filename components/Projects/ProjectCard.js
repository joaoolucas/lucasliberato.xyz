import { GiSwordwoman, GiDiamondsSmile, GiHammerNails, GiSpiderWeb } from 'react-icons/gi'
import { FiExternalLink } from 'react-icons/fi'

export const ProjectCard = ({ title, description, href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-300 dark:border-gray-800 max-w-2xl cursor-pointer focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5"
    >
      <div className="flex items-center justify-center w-full mb-4 mr-6 text-4xl sm:w-1/12 sm:mb-0">
        {icon === 'sword-woman' ? <GiSwordwoman /> : null}
        {icon === 'diamond-smile' ? <GiDiamondsSmile /> : null}
        {icon === 'hammer-nails' ? <GiHammerNails /> : null}
        {icon === 'spider-web' ? <GiSpiderWeb /> : null}
      </div>
      <div className="flex flex-col items-center w-full sm:items-start sm:w-11/12">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{title}</div>
          <FiExternalLink />
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
      </div>
    </a>
  )
}
