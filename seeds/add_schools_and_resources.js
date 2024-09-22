/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async (knex) => {
  await knex('resources').del();

  await knex('resources').insert([
    { school: 'SMU', resource: 'Get Your Health Card', link: 'https://www.smu.ca/healthclinic/student-health-plan.html' },
    { school: 'SMU', resource: 'Find Housing', link: 'https://www.smu.ca/international/the-international-centre.html' },
    { school: 'SMU', resource: 'Attend Orientation Session', link: 'https://www.smu.ca/newtosmu/welcome.html' },
    { school: 'SMU', resource: 'Explore Public Transportation', link: 'https://www.halifax.ca/transportation/halifax-transit' },
    { school: 'SMU', resource: 'Find Part-Time Employment', link: 'https://www.maxsys.ca/office/halifax/#' },
    { school: 'SMU', resource: 'Set Up a Canadian Bank Account', link: 'https://www.td.com/us/en/personal-banking' },
    { school: 'SMU', resource: 'Set Up a Canadian Phone Plan', link: 'https://www.virginplus.ca/en/home/index.html?province=ON&geoResult=failed' },
    { school: 'SMU', resource: 'Get a Nova Scotian ID Card', link: 'https://novascotia.ca/sns/paal/rmv/paal275.asp' },
    { school: 'SMU', resource: 'Get a Social Insurance Number', link: 'https://www.canada.ca/en/employment-social-development/services/sin/apply.html' },
  
    { school: 'Dalhousie University', resource: 'Open Bank Account', link: 'https://www.td.com/us/en/personal-banking' },
    { school: 'Dalhousie University', resource: 'Student Visa Help', link: 'https://www.dal.ca/campus_life/international-centre.html' },
    { school: 'Dalhousie University', resource: 'Attend Orientation Session', link: 'https://www.dal.ca/campus_life/orientation/new-to-dal.html' },
    { school: 'Dalhousie University', resource: 'Explore Public Transportation', link: 'https://www.halifax.ca/transportation/halifax-transit' },
    { school: 'Dalhousie University', resource: 'Find Part-Time Employment', link: 'https://www.maxsys.ca/office/halifax/#' },
    { school: 'Dalhousie University', resource: 'Set Up a Canadian Bank Account', link: 'https://www.td.com/us/en/personal-banking' },
    { school: 'Dalhousie University', resource: 'Set Up a Canadian Phone Plan', link: 'https://www.virginplus.ca/en/home/index.html?province=ON&geoResult=failed' },
    { school: 'Dalhousie University', resource: 'Get a Nova Scotian ID Card', link: 'https://novascotia.ca/sns/paal/rmv/paal275.asp' },
    { school: 'Dalhousie University', resource: 'Get a Social Insurance Number', link: 'https://www.canada.ca/en/employment-social-development/services/sin/apply.html' },
  ]);
};
