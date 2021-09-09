export const gaTracrId = 'G-P2RPQ0ZD3T';

export const pageview = (url: URL) => {
  window.gtag('config', gaTracrId, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({
  action, category, label, value,
}: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
