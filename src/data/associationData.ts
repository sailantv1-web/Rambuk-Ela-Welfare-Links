export interface BoardMember {
  id: string;
  name: string;
  designation: string;
  category: 'executive' | 'treasurer' | 'committee';
  phone: string;
  formattedPhone: string;
  cleanWaNumber: string;
  tierBadgeColor: 'gold' | 'emerald' | 'sapphire' | 'slate';
  roleOrder: number;
}

export interface SocialLink {
  id: string;
  title: string;
  handle: string;
  url: string;
  actionType: 'whatsapp' | 'call' | 'email' | 'facebook' | 'tiktok' | 'instagram' | 'map';
  iconType: string;
  gradientBg: string;
  textColor: string;
  borderColor: string;
  description: string;
}

export interface BankDetails {
  bankName: string;
  branch: string;
  accountName: string;
  accountNumber: string;
  cleanAccountNumber: string;
  swiftCode: string;
  currency: string;
  type: string;
}

export interface WelfareService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stats?: string;
}

export const ASSOCIATION_DATA = {
  organization: {
    englishName: "RAMBUK-ELA WELFARE ASSOCIATION",
    shortName: "RBK Welfare",
    sinhalaName: "රඹුක්-ඇල සුභසාධන සංවිධානය",
    motto: "Let's Unite — Let's Serve the Community",
    address: "# 209, Kandy Road, Rambuk Ela, Sri Lanka",
    regNo: "KDS/AKU/5/5/OR/126",
    logoUrl: "/assets/aistudio/RBK_logo-01_3000d056.jpg",
    establishedYear: "2011",
    district: "Kandy District",
    province: "Central Province",
    postalCode: "20150",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=209+Kandy+Road+Rambuk+Ela+Akurana+Sri+Lanka",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Rambuk%20Ela,%20Akurana,%20Kandy,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 7.3785,
      lng: 80.6192
    }
  },

  directConnect: {
    phone: "+94778313193",
    displayPhone: "+94 77 831 3193",
    cleanPhone: "94778313193",
    email: "rbkwa2011@gmail.com",
    whatsappNumber: "+94778313193",
    whatsappDefaultMessage: "Assalamu Alaikum / Greetings! I would like to inquire regarding the Rambuk-Ela Welfare Association.",
    facebookUrl: "https://facebook.com/RambukelaWelfare",
    facebookHandle: "Rambukela Welfare",
    tiktokUrl: "https://tiktok.com/@rbk.welfare.association",
    tiktokHandle: "@rbk.welfare.association",
    instagramUrl: "https://instagram.com/rbk.welfare.association",
    instagramHandle: "@rbk.welfare.association"
  },

  bankDetails: {
    bankName: "People's Bank",
    branch: "Akurana Branch",
    accountName: "Rambuk Ela Welfare Association",
    accountNumber: "1531 0011 0030 601",
    cleanAccountNumber: "153100110030601",
    swiftCode: "PSBKLKLX",
    currency: "LKR (Sri Lankan Rupee)",
    type: "Official Community Welfare Account"
  } as BankDetails,

  boardMembers: [
    {
      id: "pres-1",
      name: "Hussain Rifna",
      designation: "President",
      category: "executive",
      phone: "0777797321",
      formattedPhone: "+94 77 779 7321",
      cleanWaNumber: "94777797321",
      tierBadgeColor: "gold",
      roleOrder: 1
    },
    {
      id: "vp-1",
      name: "Shafeek Wahab",
      designation: "Vice President",
      category: "executive",
      phone: "077841753",
      formattedPhone: "+94 77 784 1753",
      cleanWaNumber: "94777841753",
      tierBadgeColor: "emerald",
      roleOrder: 2
    },
    {
      id: "sec-1",
      name: "Anwer Arafath",
      designation: "Secretary",
      category: "executive",
      phone: "0767293975",
      formattedPhone: "+94 76 729 3975",
      cleanWaNumber: "94767293975",
      tierBadgeColor: "emerald",
      roleOrder: 3
    },
    {
      id: "tres-1",
      name: "Nawshad Hussain",
      designation: "Treasurer",
      category: "treasurer",
      phone: "0777842654",
      formattedPhone: "+94 77 784 2654",
      cleanWaNumber: "94777842654",
      tierBadgeColor: "sapphire",
      roleOrder: 4
    },
    {
      id: "tres-2",
      name: "Kamil Azeez",
      designation: "Treasurer",
      category: "treasurer",
      phone: "0775373133",
      formattedPhone: "+94 77 537 3133",
      cleanWaNumber: "94775373133",
      tierBadgeColor: "sapphire",
      roleOrder: 5
    },
    {
      id: "comm-1",
      name: "Fawmy Haniffa",
      designation: "Committee Member",
      category: "committee",
      phone: "0777912423",
      formattedPhone: "+94 77 791 2423",
      cleanWaNumber: "94777912423",
      tierBadgeColor: "slate",
      roleOrder: 6
    },
    {
      id: "comm-2",
      name: "Ramzan Zainudeen",
      designation: "Committee Member",
      category: "committee",
      phone: "0777192598",
      formattedPhone: "+94 77 719 2598",
      cleanWaNumber: "94777192598",
      tierBadgeColor: "slate",
      roleOrder: 7
    },
    {
      id: "comm-3",
      name: "Rizad Rizwan",
      designation: "Committee Member",
      category: "committee",
      phone: "0777575809",
      formattedPhone: "+94 77 757 5809",
      cleanWaNumber: "94777575809",
      tierBadgeColor: "slate",
      roleOrder: 8
    },
    {
      id: "comm-4",
      name: "Riyas Azeez",
      designation: "Committee Member",
      category: "committee",
      phone: "0777309123",
      formattedPhone: "+94 77 730 9123",
      cleanWaNumber: "94777309123",
      tierBadgeColor: "slate",
      roleOrder: 9
    },
    {
      id: "comm-5",
      name: "Meera Sharfas",
      designation: "Committee Member",
      category: "committee",
      phone: "0773359148",
      formattedPhone: "+94 77 335 9148",
      cleanWaNumber: "94773359148",
      tierBadgeColor: "slate",
      roleOrder: 10
    },
    {
      id: "comm-6",
      name: "Ashraff Farook",
      designation: "Committee Member",
      category: "committee",
      phone: "0777567424",
      formattedPhone: "+94 77 756 7424",
      cleanWaNumber: "94777567424",
      tierBadgeColor: "slate",
      roleOrder: 11
    },
    {
      id: "comm-7",
      name: "Imthiyas Yoosuf",
      designation: "Committee Member",
      category: "committee",
      phone: "0773496773",
      formattedPhone: "+94 77 349 6773",
      cleanWaNumber: "94773496773",
      tierBadgeColor: "slate",
      roleOrder: 12
    }
  ] as BoardMember[],

  welfarePillars: [
    {
      id: "welfare-1",
      title: "Community & Bereavement Care",
      description: "Support for families during times of bereavement (Janaza arrangements, transport, and immediate family welfare relief).",
      iconName: "HeartHandshake"
    },
    {
      id: "welfare-2",
      title: "Education & Youth Development",
      description: "School supplies distribution, educational seminars, and scholarship assistance for deserving students in Rambuk Ela.",
      iconName: "GraduationCap"
    },
    {
      id: "welfare-3",
      title: "Medical & Emergency Relief",
      description: "Emergency healthcare subsidies, annual medical screening camps, and community blood donation drives.",
      iconName: "Activity"
    },
    {
      id: "welfare-4",
      title: "Infrastructure & Public Amenities",
      description: "Local area maintenance, neighborhood safety support, environmental cleanliness, and community welfare projects.",
      iconName: "Building2"
    }
  ]
};

// Generates a standard vCard string for saving the official contact to phone address book
export function generateVCard(): string {
  const org = ASSOCIATION_DATA.organization;
  const direct = ASSOCIATION_DATA.directConnect;

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${org.englishName}`,
    `ORG:${org.englishName};Welfare`,
    `TITLE:Official Community Welfare Registry`,
    `TEL;TYPE=CELL,VOICE:${direct.phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${direct.email}`,
    `ADR;TYPE=WORK:;;# 209 Kandy Road;Rambuk Ela;Central Province;20150;Sri Lanka`,
    `URL:${org.googleMapsUrl}`,
    `NOTE:Govt Reg No: ${org.regNo} | Motto: ${org.motto}`,
    'END:VCARD'
  ].join('\r\n');
}

// Generates individual member vCard
export function generateMemberVCard(member: BoardMember): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${member.name} (${member.designation})`,
    `ORG:${ASSOCIATION_DATA.organization.englishName}`,
    `TITLE:${member.designation}`,
    `TEL;TYPE=CELL,VOICE:${member.formattedPhone}`,
    `NOTE:Rambuk-Ela Welfare Association - ${member.designation}`,
    'END:VCARD'
  ].join('\r\n');
}
