export default function Footer() {
  const navigation = {
    social: [
      {
        name: "Twitter",
        href: "#",
        icon: (props: any) => (
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              d="M7.55016 19.75C16.6045 19.75 21.5583 12.2467 21.5583 5.74186C21.5583 5.53092 21.5536 5.3153 21.5442 5.10436C22.5079 4.40746 23.3395 3.54425 24 2.5553C23.1025 2.9546 22.1496 3.21538 21.1739 3.32874C22.2013 2.71291 22.9705 1.74547 23.3391 0.605767C22.3726 1.17856 21.3156 1.58261 20.2134 1.80061C19.4708 1.01156 18.489 0.489116 17.4197 0.314051C16.3504 0.138986 15.2532 0.32105 14.2977 0.832096C13.3423 1.34314 12.5818 2.15471 12.1338 3.14131C11.6859 4.12792 11.5754 5.23462 11.8195 6.2903C9.86249 6.19209 7.94794 5.6837 6.19998 4.7981C4.45203 3.91249 2.90969 2.66944 1.67297 1.14952C1.0444 2.23324 0.852057 3.51565 1.13503 4.73609C1.418 5.95654 2.15506 7.02345 3.19641 7.71999C2.41463 7.69517 1.64998 7.48468 0.965625 7.10592V7.16686C0.964925 8.30415 1.3581 9.40659 2.07831 10.2868C2.79852 11.167 3.80132 11.7706 4.91625 11.995C4.19206 12.1931 3.43198 12.222 2.69484 12.0794C3.00945 13.0574 3.62157 13.9129 4.44577 14.5263C5.26997 15.1398 6.26512 15.4806 7.29234 15.5012C5.54842 16.8711 3.39417 17.6141 1.17656 17.6106C0.783287 17.61 0.390399 17.5859 0 17.5384C2.25286 18.9837 4.87353 19.7514 7.55016 19.75Z"
              fill="#98A2B3"
            />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: (props: any) => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <g clip-path="url(#clip0_1419_136714)">
              <path
                d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                fill="#98A2B3"
              />
            </g>
            <defs>
              <clipPath id="clip0_1419_136714">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        name: "Github",
        href: "#",
        icon: (props: any) => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
              fill="#98A2B3"
            />
          </svg>
        ),
      },
      {
        name: "Facebook",
        href: "#",
        icon: (props: any) => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
              fill="#98A2B3"
            />
          </svg>
        ),
      },
    ],
  };
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-10 lg:px-8 lg:pt-16">
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base leading-6 text-grey md:order-1 md:mt-0">
            &copy; 2023 Art By Code | ABC
          </p>
        </div>
      </div>
    </footer>
  );
}
