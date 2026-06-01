/**
 * The Rasner Group — Town Registry
 *
 * To ADD a new town:
 *   1. Add an entry to this array.
 *   2. Create towns/<slug>.html using towns/_TEMPLATE.html.
 *
 * slug        — filename in /towns/ without .html (lowercase, hyphens for spaces)
 * name        — display name
 * region      — grouping label shown on card
 * latestQuarter — human-readable latest data period
 */

const TOWNS = [
  { slug:'arlington',   name:'Arlington',   region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'belmont',     name:'Belmont',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  // ── Boston Neighborhoods ───────────────────────────────────────────────────
  { slug:'boston-allston',          name:'Allston',                         region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-back-bay',         name:'Back Bay',                        region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-beacon-hill',      name:'Beacon Hill',                     region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-brighton',         name:'Brighton',                        region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-charlestown',      name:'Charlestown',                     region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-dorchester',       name:'Dorchester',                      region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-east-boston',      name:'East Boston',                     region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-fenway',           name:'Fenway / Kenmore Square',         region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-hyde-park',        name:'Hyde Park',                       region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-jamaica-plain',    name:'Jamaica Plain',                   region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-downtown',         name:'Downtown',                        region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-mission-hill',     name:'Mission Hill',                    region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-north-end',        name:'North End',                       region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-roslindale',       name:'Roslindale',                      region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-roxbury',          name:'Roxbury',                         region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-seaport',          name:'Seaport District',                region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-south-boston',     name:'South Boston',                    region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-south-end',        name:'South End / Bay Village',         region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-waterfront',       name:'Waterfront',                      region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-west-end',         name:'West End',                        region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'boston-west-roxbury',     name:'West Roxbury',                    region:'Boston', latestQuarter:'Q1 2026' },
  { slug:'braintree',   name:'Braintree',   region:'South Shore',    latestQuarter:'Q1 2026' },
  { slug:'brookline',   name:'Brookline',   region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'burlington',  name:'Burlington',  region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'cambridge',   name:'Cambridge',   region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'canton',      name:'Canton',      region:'South Shore',    latestQuarter:'Q1 2026' },
  { slug:'chelsea',     name:'Chelsea',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'dedham',      name:'Dedham',      region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'everett',     name:'Everett',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'framingham',  name:'Framingham',  region:'MetroWest',      latestQuarter:'Q1 2026' },
  { slug:'lexington',   name:'Lexington',   region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'lynn',        name:'Lynn',        region:'North Shore',    latestQuarter:'Q1 2026' },
  { slug:'lynnfield',   name:'Lynnfield',   region:'North Shore',    latestQuarter:'Q1 2026' },
  { slug:'malden',      name:'Malden',      region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'marblehead',  name:'Marblehead',  region:'North Shore',    latestQuarter:'Q1 2026' },
  { slug:'medford',     name:'Medford',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'melrose',     name:'Melrose',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'milton',      name:'Milton',      region:'South Shore',    latestQuarter:'Q1 2026' },
  { slug:'natick',      name:'Natick',      region:'MetroWest',      latestQuarter:'Q1 2026' },
  { slug:'needham',     name:'Needham',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'newton',      name:'Newton',      region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'norwood',     name:'Norwood',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'peabody',     name:'Peabody',     region:'North Shore',    latestQuarter:'Q1 2026' },
  { slug:'quincy',      name:'Quincy',      region:'South Shore',    latestQuarter:'Q1 2026' },
  { slug:'randolph',    name:'Randolph',    region:'South Shore',    latestQuarter:'Q1 2026' },
  { slug:'revere',      name:'Revere',      region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'salem',       name:'Salem',       region:'North Shore',    latestQuarter:'Q1 2026' },
  { slug:'saugus',      name:'Saugus',      region:'North Shore',    latestQuarter:'Q1 2026' },
  { slug:'somerville',  name:'Somerville',  region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'stoneham',    name:'Stoneham',    region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'swampscott',  name:'Swampscott',  region:'North Shore',    latestQuarter:'Q1 2026' },
  { slug:'wakefield',   name:'Wakefield',   region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'waltham',     name:'Waltham',     region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'watertown',   name:'Watertown',   region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'wayland',     name:'Wayland',     region:'MetroWest',      latestQuarter:'Q1 2026' },
  { slug:'wellesley',   name:'Wellesley',   region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'weston',      name:'Weston',      region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'westwood',    name:'Westwood',    region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'wilmington',  name:'Wilmington',  region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'winchester',  name:'Winchester',  region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'winthrop',    name:'Winthrop',    region:'Greater Boston', latestQuarter:'Q1 2026' },
  { slug:'woburn',      name:'Woburn',      region:'Greater Boston', latestQuarter:'Q1 2026' },
];
