import { includes, findIndex } from 'lodash'

const landing_pages = [
  {
    host: "lagunabeachrpm",
    city: "Laguna Beach",
    partner_text: "In partnership with Laguna Cardiology’s Dr. Dawn Atwal we’re doing our part to meet the challenges that can come with time in the town we love.",
    partner_logos: ["laguna-cardiology"],
    city_image: "laguna-beach",
  },
  {
    host: "irvinerpm",
    city: "Laguna Beach",
    partner_text: "In partnership with Laguna Cardiology’s Dr. Dawn Atwal and hometown nonprofit Lifelong Laguna we’re doing our part to meet the challenges that can come with time in the town we love.",
    partner_logos: ["laguna-cardiology","life-long-laguna"],
    city_image: "laguna-beach",
  },
]

export const get_landing_page_info = (url) => {
  return landing_pages[findIndex(landing_pages, label => includes(url, label.host))]
}

