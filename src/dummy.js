
import SECURE_ICON from './assets/icons/secure.png';
import SUPPORT_ICON from './assets/icons/support.png';
import HOSPITAL_ICON from './assets/icons/hospital.png';
import FAMILY_ICON from './assets/icons/family.png';
import PAYMENT_ICON from './assets/icons/payment.png';

// health paln images
import BUSINESS from './assets/business.png';
import SENIOR_CITIZEN from './assets/senior_citizens.png';
import INDIVIDUAL_CITIZEN from './assets/individual.png';
import FAMILY from './assets/family.png';

export const health_plans = [
    {
        image: INDIVIDUAL_CITIZEN,
        title: 'For Individuals',
        content: 'The best and quality insurance plans that won’t disappoint you. Buy health insurance and get to pay zero naira at the hospital whilst getting the best care.',
        url: '#'
    },
    {
        image: BUSINESS,
        title: 'For Business',
        content: 'Get health insurance for your employees and workers to keep them happy and also improve work efficiency.',
        url: '#'
    },
    {
        image: FAMILY,
        title: 'For Family',
        content: 'Buy from our splendid family insurance plans and insure the health of you and your family members.',
        url: '#'
    },
    {
        image: SENIOR_CITIZEN,
        title: 'For Senior Citizens',
        content: 'Are you looking for health insurance as a senior citizen or are you looking for insurance for your older family members? Either way, we got you covered with our premium plans.',
        url: '#'
    },
]
export const why_us = [
    {
        image: SECURE_ICON,
        content: 'Affordable and cost effectve plans for yourself, your family, older family members and even your businesses.',

    },
    {
        image: HOSPITAL_ICON,
        content: 'We work with the best hospitals for the best healthcare.',

    },
    {
        image: SUPPORT_ICON,
        content: '24-7 customer support.',

    },
    {
        image: PAYMENT_ICON,
        content: 'Flexible and easy payments.',

    },
    {
        image: FAMILY_ICON,
        content: 'Easy and smooth corporate plans.',

    },
]


export const TransactionsData = [
    {
        name: 'For Ultrasound Test',
        fee: '2500',
        date: 'Monday July 2022',
        type: 'fixed'
    },
    {
        name: 'For Medicines',
        fee: '4700',
        date: 'Monday January 2022',
        type: 'fixed'
    },
    {
        name: 'For Operation',
        fee: '2500',
        date: 'Monday December 2021',
        type: 'fixed'
    },
    {
        name: 'Renew your payment',
        fee: '5000',
        date: 'Monday December 2021',
        type: 'renew'
    },
]