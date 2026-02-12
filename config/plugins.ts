import type { Core } from "@strapi/strapi";

const categories = [
  {
    value: "fashion",
    label: "Fashion",
    icon: {
      src: "/admin/public/github.svg",
      colorMask: true,
    },
  },
  { value: "beauty", label: "Beauty" },
  { value: "electronics", label: "Electronics" },
  { value: "home", label: "Home" },
  { value: "sports", label: "Sports" },
  { value: "toys", label: "Toys" },
  { value: "books", label: "Books" },
  { value: "automotive", label: "Automotive" },
];

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  "generic-custom-fields": {
    enabled: true,
    resolve: `./src/plugins/strapi-plugin-generic-custom-fields`,
    config: {
      customFields: [
        {
          name: "Category",
          description: "Select a category",
          icon: "PuzzlePiece",
          fetchItems: () => ({ items: categories }),
          fetchItem: ({ value }) =>
            categories.find((category) => category.value === value),
        },
      ],
    },
  },
});

export default config;
