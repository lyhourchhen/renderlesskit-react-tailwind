export const avatar = {
  base:
    "lib:relative lib:inline-flex lib:items-center lib:justify-center lib:rounded-full lib:flex-shrink-0 lib:bg-gray-100",
  size: {
    xs: "lib:h-4 lib:w-4",
    sm: "lib:h-5 lib:w-5",
    md: "lib:h-6 lib:w-6",
    lg: "lib:h-8 lib:w-8",
    xl: "lib:h-10 lib:w-10",
  },
  border: {
    width: {
      xs: "lib:ring-1",
      sm: "lib:ring-1",
      md: "lib:ring-2",
      lg: "lib:ring-2",
      xl: "lib:ring-2",
    },
    color: "lib:ring-white",
  },
  name: {
    base: "lib:text-center lib:uppercase lib:text-gray-500",
    size: {
      xs: "lib:text-xs",
      sm: "lib:text-xs",
      md: "lib:text-xs",
      lg: "lib:text-xs",
      xl: "lib:text-sm",
    },
  },
  icon: {
    base: "lib:inline-flex lib:text-gray-500",
    size: {
      xs: "lib:text-[0.625rem]",
      sm: "lib:text-xs",
      md: "lib:text-xs",
      lg: "lib:text-xs",
      xl: "lib:text-xs",
    },
  },
  image: "lib:rounded-full lib:w-full lib:h-full lib:object-cover",
  badge: {
    base:
      "lib:absolute lib:flex lib:items-center lib:justify-center lib:ring-white lib:rounded-full",
    position: {
      "top-left": "lib:top-0 lib:left-0",
      "top-right": "lib:top-0 lib:right-0",
      "bottom-right": "lib:bottom-0 lib:right-0",
      "bottom-left": "lib:bottom-0 lib:left-0",
    },
    size: {
      xs: "lib:text-[0.25rem] lib:ring-1",
      sm: "lib:text-[0.25rem] lib:ring-1",
      md: "lib:text-[0.25rem] lib:ring-2",
      lg: "lib:text-[0.375rem] lib:ring-2",
      xl: "lib:text-[0.5rem] lib:ring-2",
    },
    statuses: {
      online: "text-green-500",
      sleep: "text-gray-500",
      typing: {
        base:
          "lib:flex lib:items-center lib:justify-center lib:bg-gray-500 lib:rounded-full lib:space-x-px",
        size: {
          xs: "lib:h-1 lib:p-px",
          sm: "lib:h-1.5 lib:p-0.5",
          md: "lib:h-1.5 lib:p-0.5",
          lg: "lib:h-1.5 lib:p-0.5",
          xl: "lib:h-2 lib:p-1",
        },
        circle:
          "lib:bg-white lib:w-0.5 lib:h-0.5 lib:rounded-full lib:animate-pulse",
      },
    },
  },
  group: {
    base: "lib:inline-flex lib:items-center lib:-space-x-1.5",
    excess: {
      bg:
        "lib:absolute lib:inset-0 lib:bg-black lib:rounded-full lib:opacity-50",
      text: {
        base:
          "lib:absolute lib:inset-0 lib:flex lib:items-center lib:justify-center lib:text-white lib:rounded-full lib:font-semibold",
        size: {
          xs: "lib:text-xs",
          sm: "lib:text-xs",
          md: "lib:text-xs",
          lg: "lib:text-xs",
          xl: "lib:text-sm",
        },
      },
    },
  },
};
