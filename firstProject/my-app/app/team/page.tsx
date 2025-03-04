import React from 'react';
export default function Team() {
  return (
<>
<div className="p-20 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="text-center my-16">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-medium">THE TEAM</p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Meet Our <span className="text-indigo-600">Team</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center hover:scale-105 transition-transform duration-200">
            <a href={member.link}>
              <img
                className="mb-3 rounded-xl mx-auto h-32 w-32"
                src={member.image}
                alt={`Profile picture of ${member.name}`}
              />
            </a>
            <a href={member.link} className="hover:text-indigo-500 text-gray-900 font-semibold">
              {member.name}
            </a>
            <p className="text-gray-500 uppercase text-sm">{member.role}</p>
            <p className="text-gray-400 text-sm mb-4">{member.description}</p>
            <div className="my-4 flex justify-center items-center">
              {member.socials.map((social, i) => (
                <a key={i} href={social.link} className="mr-3" aria-label={social.name} aria-hidden={false}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
}

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    description: 'John is a passionate web developer with 5 years of experience in building responsive and user-friendly websites. He loves to explore new technologies and improve his skills.',
    image: 'https://loremflickr.com/320/320/girl?random=1',
    link: '#',
    socials: [
      {
        name: 'Facebook',
        link: '#',
        icon: (
          <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2">
              <g data-name="facebook">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
              </g>
            </g>
          </svg>
        ),
      },
      {
        name: 'Twitter',
        link: '#',
        icon: (
          <svg width="16px" height="16px" viewBox="0 0 310 310" xmlns="http://www.w3.org/2000/svg">
            <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998C307.394,57.037,305.009,56.486,302.973,57.388z"></path>
          </svg>
        ),
      },
      {
        name: 'Instagram',
        link: '#',
        icon: (
          <svg width="19px" height="19px" viewBox="0 0 239.04 239.04">
            <path d="M119.52,0C53.554,0,0,53.554,0,119.52S53.554,239.04,119.52,239.04,239.04,185.486,239.04,119.52,185.486,0,119.52,0ZM184.312,72.64c1.52,0,2.6,1.088,2.6,2.6v13.522a2.59,2.59,0,0,1-2.6,2.6H56.728c-1.52,0-2.6-1.088-2.6-2.6V75.24c0-1.52,1.08-2.6,2.6-2.6Zm-48.332,36.028a35.448,35.448,0,1,1-35.448,35.448A35.435,35.435,0,0,1,135.98,108.668Zm51.51-5.572a8.579,8.579,0,0,1-8.579-8.579V48.754a8.579,8.579,0,0,1,17.158,0v51.342A8.579,8.579,0,0,1,187.477,103.1Z" fill="#000" />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'John Doe',
    role: 'Web Developer',
    description: 'John is a passionate web developer with 5 years of experience in building responsive and user-friendly websites. He loves to explore new technologies and improve his skills.',
    image: 'https://loremflickr.com/320/320/girl?random=1',
    link: '#',
    socials: [
      {
        name: 'Facebook',
        link: '#',
        icon: (
          <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2">
              <g data-name="facebook">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
              </g>
            </g>
          </svg>
        ),
      },
      {
        name: 'Twitter',
        link: '#',
        icon: (
          <svg width="16px" height="16px" viewBox="0 0 310 310" xmlns="http://www.w3.org/2000/svg">
            <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998C307.394,57.037,305.009,56.486,302.973,57.388z"></path>
          </svg>
        ),
      },
      {
        name: 'Instagram',
        link: '#',
        icon: (
          <svg width="19px" height="19px" viewBox="0 0 239.04 239.04">
            <path d="M119.52,0C53.554,0,0,53.554,0,119.52S53.554,239.04,119.52,239.04,239.04,185.486,239.04,119.52,185.486,0,119.52,0ZM184.312,72.64c1.52,0,2.6,1.088,2.6,2.6v13.522a2.59,2.59,0,0,1-2.6,2.6H56.728c-1.52,0-2.6-1.088-2.6-2.6V75.24c0-1.52,1.08-2.6,2.6-2.6Zm-48.332,36.028a35.448,35.448,0,1,1-35.448,35.448A35.435,35.435,0,0,1,135.98,108.668Zm51.51-5.572a8.579,8.579,0,0,1-8.579-8.579V48.754a8.579,8.579,0,0,1,17.158,0v51.342A8.579,8.579,0,0,1,187.477,103.1Z" fill="#000" />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'John Doe',
    role: 'Web Developer',
    description: 'John is a passionate web developer with 5 years of experience in building responsive and user-friendly websites. He loves to explore new technologies and improve his skills.',
    image: 'https://loremflickr.com/320/320/girl?random=1',
    link: '#',
    socials: [
      {
        name: 'Facebook',
        link: '#',
        icon: (
          <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2">
              <g data-name="facebook">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
              </g>
            </g>
          </svg>
        ),
      },
      {
        name: 'Twitter',
        link: '#',
        icon: (
          <svg width="16px" height="16px" viewBox="0 0 310 310" xmlns="http://www.w3.org/2000/svg">
            <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998C307.394,57.037,305.009,56.486,302.973,57.388z"></path>
          </svg>
        ),
      },
      {
        name: 'Instagram',
        link: '#',
        icon: (
          <svg width="19px" height="19px" viewBox="0 0 239.04 239.04">
            <path d="M119.52,0C53.554,0,0,53.554,0,119.52S53.554,239.04,119.52,239.04,239.04,185.486,239.04,119.52,185.486,0,119.52,0ZM184.312,72.64c1.52,0,2.6,1.088,2.6,2.6v13.522a2.59,2.59,0,0,1-2.6,2.6H56.728c-1.52,0-2.6-1.088-2.6-2.6V75.24c0-1.52,1.08-2.6,2.6-2.6Zm-48.332,36.028a35.448,35.448,0,1,1-35.448,35.448A35.435,35.435,0,0,1,135.98,108.668Zm51.51-5.572a8.579,8.579,0,0,1-8.579-8.579V48.754a8.579,8.579,0,0,1,17.158,0v51.342A8.579,8.579,0,0,1,187.477,103.1Z" fill="#000" />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'John Doe',
    role: 'Web Developer',
    description: 'John is a passionate web developer with 5 years of experience in building responsive and user-friendly websites. He loves to explore new technologies and improve his skills.',
    image: 'https://loremflickr.com/320/320/girl?random=1',
    link: '#',
    socials: [
      {
        name: 'Facebook',
        link: '#',
        icon: (
          <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2">
              <g data-name="facebook">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
              </g>
            </g>
          </svg>
        ),
      },
      {
        name: 'Twitter',
        link: '#',
        icon: (
          <svg width="16px" height="16px" viewBox="0 0 310 310" xmlns="http://www.w3.org/2000/svg">
            <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998C307.394,57.037,305.009,56.486,302.973,57.388z"></path>
          </svg>
        ),
      },
      {
        name: 'Instagram',
        link: '#',
        icon: (
          <svg width="19px" height="19px" viewBox="0 0 239.04 239.04">
            <path d="M119.52,0C53.554,0,0,53.554,0,119.52S53.554,239.04,119.52,239.04,239.04,185.486,239.04,119.52,185.486,0,119.52,0ZM184.312,72.64c1.52,0,2.6,1.088,2.6,2.6v13.522a2.59,2.59,0,0,1-2.6,2.6H56.728c-1.52,0-2.6-1.088-2.6-2.6V75.24c0-1.52,1.08-2.6,2.6-2.6Zm-48.332,36.028a35.448,35.448,0,1,1-35.448,35.448A35.435,35.435,0,0,1,135.98,108.668Zm51.51-5.572a8.579,8.579,0,0,1-8.579-8.579V48.754a8.579,8.579,0,0,1,17.158,0v51.342A8.579,8.579,0,0,1,187.477,103.1Z" fill="#000" />
          </svg>
        ),
      },
    ],
  },
  // Add more team members here...
];
