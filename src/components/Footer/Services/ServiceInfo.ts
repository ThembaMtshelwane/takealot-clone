interface ListItem{
    name:string;
    link: string
}

export interface Service{
    heading:string;
    list: ListItem[]
}

export const account ={
    heading:'Account',
    list:[
        {name:'My Account',link:'/account'},
        {name:'Track Order',link:'/account/order'},
        {name:'Returns',link:'/returns'},
        {name:'Personal Details',link:'/personal-details'},
        {name:'Invoices',link:'/invoices'}
    ]
} 

export const help ={
    heading:'Help',
    list:[
        {name:'Help Centre',link:'/help'},
        {name:'Careers',link:'/careers'},
        {name:'Sell on Takealot',link:'/sell'},
        {name:'Deliver for Takealot',link:'/delivery'},
        {name:'Press & News',link:'/news'},
        {name:'Competitions',link:'/competitions'},
        {name:'Terms & Conditions ',link:'/tc'},
        {name:'Private Policy',link:'/private-policy'},
        {name:'Human Rights Statement',link:'/competitions'},
        {name:'Speak Up Process',link:'/speak-up'}
    ]
} 

export const company ={
    heading:'Help',
    list:[
        {name:'About Us',link:'/about'},
        {name:'Contact Us',link:'/contact'},
        {name:'Submit an Idea',link:'/submit'},
        {name:'Shipping & Delivery',link:'/delivery'},
        {name:'Takealot Pickup Points',link:'/pickup'},
        {name:'Returns',link:'/returns'}
    ]
} 

export const shop ={
    heading:'Shop',
    list:[
        {name:'Daily Deals',link:'/about'},
        {name:'Apply Only Deals',link:'/contact'},
        {name:'Clearance Sale',link:'/submit'},
        {name:'Gift Vouchers',link:'/delivery'},
    ]
} 

export const takealotGroup ={
    heading:'Takealot.group',
    list:[
        {name:'Superbalist.com',link:'https://superbalist.com'},
        {name:'Mr D',link:'https://mrd.com'},
    ]
} 