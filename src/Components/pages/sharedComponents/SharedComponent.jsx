import { socialIcons } from "../../../data"


export const PageHead = ({page}) => {

  return (
    <>
      <h2 className="font-black text-3xl pt-6 font-lora tracking-wide">
        <span className="font-medium">My</span> {page}
      </h2>

      <p className="text-lg my-0 py-2">
        Am a front-end Developer who loves building user-friendly website and
        web app and currently living in Nanjing China.
      </p>
    </>
  )
}

export const SocialMediaIcons = () => {

  return (
    <ul className='list-none m-0 p-0'>
      {socialIcons.map((icon) => {

        return (
          <li key={icon.id} className='inline-block mx-2'>
            <a href={icon.link} target="_blank" rel="noreferrer" className="px-2 py-2 rounded-full bg-white group border border-solid hover:bg-pink-400 active:bg-pink-700 transition-colors duration-200 ease-linear">
              <icon.icon className="text-lg text-stone-700 grid items-center group-hover:text-white transition-colors duration-200 ease-linear" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export const Button = ({text}) => {

  return (
    <button className="rounded-md py-3 px-5 bg-pink-400 border-0 border-solid border-pink-400 text-white mb-10 hover:bg-pink-300 active:bg-pink-700 transition-colors duration-200 ease-linear
        shadow-md shadow-white/50">
      {text}
    </button>
  )
}