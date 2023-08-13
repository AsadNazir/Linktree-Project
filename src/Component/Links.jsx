import React from 'react'
import { FaMailchimp, FaGithub, FaGlobe, FaHackerrank, FaInstagram, FaLink, FaLinkedin, FaMailBulk, FaMedium, FaTwitter } from 'react-icons/fa';
// Create a mapping of linkTitle values to their corresponding icons
const iconMapping = {
  Instagram: FaInstagram,
  Github: FaGithub,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedin,
  Medium: FaMedium,
  Hackerrank: FaHackerrank,
  Website: FaGlobe,
  Link: FaLink,
  Mail: FaMailBulk,

};
export default function Links(props) {
  // Get the icon component from the mapping

  let Icon = iconMapping[props.linkTitle];
  if (Icon == undefined) {
    Icon = FaLink
  }

  return (
    <div className='w-[100%] relative my-2 rounded-sm overflow-hidden'>

      <a className="w-[100%] hover:bg-black hover:border transition-all border hover:text-white justify-center items-center md:text-lg md:p-4 p-3 text-md flex bg-white  text-black " href={props.linkTitle !== "Mail" ? `${props.linkUrl}` : `mailto:${props.linkUrl}`} target='_blank'> {Icon && <Icon className='md:scale-[2] scale-[1.8] absolute left-[10%]' />}<span className=''>{props.linkTitle}</span></a>
    </div>
  )
}
