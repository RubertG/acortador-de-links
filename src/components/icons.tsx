import { type FC } from 'react'

interface Props {
  className?: string
}

interface PropsWithColor extends Props {
  color?: string
}

interface PropsLoader extends PropsWithColor {
  loading: boolean
}

export const RedirectIcon: FC<Props> = ({ className = '' }) => {
  return (
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" className={className}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M48.3,74.5c1,0,1.8-0.8,1.8-1.8l0.1-20.8c0.1-1-0.8-1.8-1.6-1.9l-0.3,0l-20.9,0c-1-0.1-1.8,0.8-1.9,1.6 v0.3v3.8c-0.1,1,0.8,1.8,1.6,1.9h0.3h6.6c0.7,0,1.3,0.6,1.3,1.3c0,0.3-0.1,0.7-0.3,0.9l-14,14c-0.8,0.8-0.8,2.1-0.1,2.8l2.7,2.7 c0.8,0.7,2,0.6,2.8-0.1l14.1-14.1c0.5-0.5,1.3-0.5,1.8,0c0.2,0.2,0.4,0.5,0.3,0.9v6.6c-0.1,1,0.8,1.8,1.6,1.9h0.3L48.3,74.5z"></path> </g> <path d="M55.7,77.7c5.7-1,11.2-3.7,15.6-8c11.3-11.3,11.3-29.7,0-41s-29.7-11.3-41,0c-4.4,4.4-7,9.8-8,15.5l5.9,0 c0.9-4.2,3-8.1,6.2-11.4c9-9,23.8-9,32.8,0s9,23.8,0,32.8c-3.2,3.2-7.2,5.3-11.3,6.2L55.7,77.7z M56,65.8c2.6-0.8,5.1-2.2,7.1-4.3 c6.8-6.8,6.8-17.8,0-24.6s-17.8-6.8-24.6,0c-2.1,2.1-3.5,4.6-4.3,7.2l6.2,0c0.5-1.2,1.3-2.2,2.2-3.2c4.5-4.5,11.9-4.5,16.4,0 s4.5,11.9,0,16.4c-0.9,0.9-1.9,1.6-3,2.2L56,65.8z"></path> </g> </g></svg>
  )
}

export const LoadingIcon: FC<PropsLoader> = ({ className = '', loading = false, color = '#6B21A8' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className={`${className} transition-opacity ${loading ? 'opacity-100' : 'opacity-0'}`}><path fill="none" stroke={color} strokeWidth="15" strokeLinecap="round" strokeDasharray="300 385" strokeDashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
  )
}

export const DangerIcon: FC<PropsWithColor> = ({ className = '', color = '#dc2626' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><g id="SVGRepo_bgCarrier" strokeWidth="0" className={className}></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9V14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0001 21.41H5.94005C2.47005 21.41 1.02005 18.93 2.70005 15.9L5.82006 10.28L8.76006 5.00003C10.5401 1.79003 13.4601 1.79003 15.2401 5.00003L18.1801 10.29L21.3001 15.91C22.9801 18.94 21.5201 21.42 18.0601 21.42H12.0001V21.41Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.9945 17H12.0035" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
  )
}

export const CopyIcon: FC<PropsWithColor> = ({ className = '', color = '#dc2626' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M15 1.25H10.9436C9.10583 1.24998 7.65019 1.24997 6.51098 1.40314C5.33856 1.56076 4.38961 1.89288 3.64124 2.64124C2.89288 3.38961 2.56076 4.33856 2.40314 5.51098C2.24997 6.65019 2.24998 8.10582 2.25 9.94357V16C2.25 17.8722 3.62205 19.424 5.41551 19.7047C5.55348 20.4687 5.81753 21.1208 6.34835 21.6517C6.95027 22.2536 7.70814 22.5125 8.60825 22.6335C9.47522 22.75 10.5775 22.75 11.9451 22.75H15.0549C16.4225 22.75 17.5248 22.75 18.3918 22.6335C19.2919 22.5125 20.0497 22.2536 20.6517 21.6517C21.2536 21.0497 21.5125 20.2919 21.6335 19.3918C21.75 18.5248 21.75 17.4225 21.75 16.0549V10.9451C21.75 9.57754 21.75 8.47522 21.6335 7.60825C21.5125 6.70814 21.2536 5.95027 20.6517 5.34835C20.1208 4.81753 19.4687 4.55348 18.7047 4.41551C18.424 2.62205 16.8722 1.25 15 1.25ZM17.1293 4.27117C16.8265 3.38623 15.9876 2.75 15 2.75H11C9.09318 2.75 7.73851 2.75159 6.71085 2.88976C5.70476 3.02502 5.12511 3.27869 4.7019 3.7019C4.27869 4.12511 4.02502 4.70476 3.88976 5.71085C3.75159 6.73851 3.75 8.09318 3.75 10V16C3.75 16.9876 4.38624 17.8265 5.27117 18.1293C5.24998 17.5194 5.24999 16.8297 5.25 16.0549V10.9451C5.24998 9.57754 5.24996 8.47522 5.36652 7.60825C5.48754 6.70814 5.74643 5.95027 6.34835 5.34835C6.95027 4.74643 7.70814 4.48754 8.60825 4.36652C9.47522 4.24996 10.5775 4.24998 11.9451 4.25H15.0549C15.8297 4.24999 16.5194 4.24998 17.1293 4.27117ZM7.40901 6.40901C7.68577 6.13225 8.07435 5.9518 8.80812 5.85315C9.56347 5.75159 10.5646 5.75 12 5.75H15C16.4354 5.75 17.4365 5.75159 18.1919 5.85315C18.9257 5.9518 19.3142 6.13225 19.591 6.40901C19.8678 6.68577 20.0482 7.07435 20.1469 7.80812C20.2484 8.56347 20.25 9.56458 20.25 11V16C20.25 17.4354 20.2484 18.4365 20.1469 19.1919C20.0482 19.9257 19.8678 20.3142 19.591 20.591C19.3142 20.8678 18.9257 21.0482 18.1919 21.1469C17.4365 21.2484 16.4354 21.25 15 21.25H12C10.5646 21.25 9.56347 21.2484 8.80812 21.1469C8.07435 21.0482 7.68577 20.8678 7.40901 20.591C7.13225 20.3142 6.9518 19.9257 6.85315 19.1919C6.75159 18.4365 6.75 17.4354 6.75 16V11C6.75 9.56458 6.75159 8.56347 6.85315 7.80812C6.9518 7.07435 7.13225 6.68577 7.40901 6.40901Z" fill={color}></path> </g></svg>
  )
}

export const GithubIcon: FC<Props> = ({ className = '' }) => {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
    </svg>
  )
}

export const BackIcon: FC<Props> = ({ className = '' }) => {
  return (
    <svg width="64px" height="64px" viewBox="0 0 1024 1024" fill="#000000" className={className} version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path></g></svg>
  )
}
