import MockAdapter from 'axios-mock-adapter'
import { v4 as uuidv4 } from 'uuid'

import type { Course } from '~/types'

// const imageUrls = ['js.png', 'python.png', 'react.jpg', 'laravel.png', 'zustand.png', 'vue.jpg']

// function getRandomItem<T>(arr: T[]): T {
//     return arr[Math.floor(Math.random() * arr.length)]
// }

// function createCourseData(): Course[] {
//     return Array.from({ length: 25 }, (_, i) => {
//         const category = getRandomItem(categoriesData)
//         const image = getRandomItem(imageUrls)

//         return {
//             id: uuidv4(),
//             image,
//             images: [image],
//             course_code: `COURSE${(i + 1).toString().padStart(3, '0')}`,
//             name: `Khóa học số ${i + 1}`,
//             description: `Mô tả cho khóa học số ${i + 1}.`,
//             year: 2025,
//             credit: 3,
//             price: (1000000 + i * 100000).toFixed(2),
//             price_before_discount: Math.random() < 0.5 ? undefined : (2000000 + i * 100000 + 500000).toFixed(2),
//             rating: (Math.random() * 4 + 1).toFixed(2),
//             quantity: 100 - i,
//             sold: i * 2,
//             view: 100 + i,
//             category_id: category.id,
//             created_at: new Date().toISOString(),
//             updated_at: new Date().toISOString(),
//             category
//         }
//     })
// }

const coursesData: Course[] = [
    {
        id: 'e5e086f1-76bb-49e1-838a-2d753d1a08f9',
        image: 'zustand.png',
        images: ['zustand.png'],
        course_code: 'COURSE001',
        name: 'Khóa học số 1',
        description: 'Mô tả cho khóa học số 1.',
        year: 2025,
        credit: 3,
        price: '1000000.00',
        price_before_discount: '2500000.00',
        rating: '3.80',
        quantity: 100,
        sold: 0,
        view: 100,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'd74c785d-a81f-40a1-aa5f-eb34834f28f0',
        image: 'react.jpg',
        images: ['react.jpg'],
        course_code: 'COURSE002',
        name: 'Khóa học số 2',
        description: 'Mô tả cho khóa học số 2.',
        year: 2025,
        credit: 3,
        price: '1100000.00',
        price_before_discount: '2600000.00',
        rating: '3.69',
        quantity: 99,
        sold: 2,
        view: 101,
        category_id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
            name: 'Symfony',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'f8372a6e-9edc-4843-afcd-291ae5526b1a',
        image: 'python.png',
        images: ['python.png'],
        course_code: 'COURSE003',
        name: 'Khóa học số 3',
        description: 'Mô tả cho khóa học số 3.',
        year: 2025,
        credit: 3,
        price: '1200000.00',
        rating: '1.37',
        quantity: 98,
        sold: 4,
        view: 102,
        category_id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
            name: 'ReactJS',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '20724e21-b71b-4bbd-b75e-6e187bb5c122',
        image: 'react.jpg',
        images: ['react.jpg'],
        course_code: 'COURSE004',
        name: 'Khóa học số 4',
        description: 'Mô tả cho khóa học số 4.',
        year: 2025,
        credit: 3,
        price: '1300000.00',
        rating: '4.80',
        quantity: 97,
        sold: 6,
        view: 103,
        category_id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
            name: 'PHP',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '62e33065-67bd-4fb3-bf29-b43d3bb121b3',
        image: 'js.png',
        images: ['js.png'],
        course_code: 'COURSE005',
        name: 'Khóa học số 5',
        description: 'Mô tả cho khóa học số 5.',
        year: 2025,
        credit: 3,
        price: '1400000.00',
        rating: '2.88',
        quantity: 96,
        sold: 8,
        view: 104,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '55cd7553-c41d-487b-ba18-4b16c8e10bab',
        image: 'js.png',
        images: ['js.png'],
        course_code: 'COURSE006',
        name: 'Khóa học số 6',
        description: 'Mô tả cho khóa học số 6.',
        year: 2025,
        credit: 3,
        price: '1500000.00',
        rating: '4.78',
        quantity: 95,
        sold: 10,
        view: 105,
        category_id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
            name: 'ReactJS',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '829849fd-9801-4b17-9a4a-ecf9af3013ca',
        image: 'vue.jpg',
        images: ['vue.jpg'],
        course_code: 'COURSE007',
        name: 'Khóa học số 7',
        description: 'Mô tả cho khóa học số 7.',
        year: 2025,
        credit: 3,
        price: '1600000.00',
        price_before_discount: '3100000.00',
        rating: '1.98',
        quantity: 94,
        sold: 12,
        view: 106,
        category_id: '7367354b-fc00-4ac7-96bd-dd9e2324458d',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '7367354b-fc00-4ac7-96bd-dd9e2324458d',
            name: 'Node.js',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'f89f503e-52f5-4274-a59d-649ad9a5a73f',
        image: 'react.jpg',
        images: ['react.jpg'],
        course_code: 'COURSE008',
        name: 'Khóa học số 8',
        description: 'Mô tả cho khóa học số 8.',
        year: 2025,
        credit: 3,
        price: '1700000.00',
        price_before_discount: '3200000.00',
        rating: '1.19',
        quantity: 93,
        sold: 14,
        view: 107,
        category_id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
            name: 'Symfony',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'fc92f1da-a93f-4a3f-af36-42b763a124a4',
        image: 'js.png',
        images: ['js.png'],
        course_code: 'COURSE009',
        name: 'Khóa học số 9',
        description: 'Mô tả cho khóa học số 9.',
        year: 2025,
        credit: 3,
        price: '1800000.00',
        rating: '3.87',
        quantity: 92,
        sold: 16,
        view: 108,
        category_id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
            name: 'ReactJS',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'ab653aaa-7333-4233-9b08-6b22c3bbddd6',
        image: 'zustand.png',
        images: ['zustand.png'],
        course_code: 'COURSE010',
        name: 'Khóa học số 10',
        description: 'Mô tả cho khóa học số 10.',
        year: 2025,
        credit: 3,
        price: '1900000.00',
        price_before_discount: '3400000.00',
        rating: '2.75',
        quantity: 91,
        sold: 18,
        view: 109,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '2caf687b-9123-4422-b0c3-66c31dea9607',
        image: 'vue.jpg',
        images: ['vue.jpg'],
        course_code: 'COURSE011',
        name: 'Khóa học số 11',
        description: 'Mô tả cho khóa học số 11.',
        year: 2025,
        credit: 3,
        price: '2000000.00',
        rating: '4.77',
        quantity: 90,
        sold: 20,
        view: 110,
        category_id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
            name: 'Symfony',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '1c586be2-4de4-45f1-b750-306d7b06d445',
        image: 'vue.jpg',
        images: ['vue.jpg'],
        course_code: 'COURSE012',
        name: 'Khóa học số 12',
        description: 'Mô tả cho khóa học số 12.',
        year: 2025,
        credit: 3,
        price: '2100000.00',
        rating: '4.81',
        quantity: 89,
        sold: 22,
        view: 111,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '5386c237-79b9-4861-90bf-cb73c2027ac7',
        image: 'react.jpg',
        images: ['react.jpg'],
        course_code: 'COURSE013',
        name: 'Khóa học số 13',
        description: 'Mô tả cho khóa học số 13.',
        year: 2025,
        credit: 3,
        price: '2200000.00',
        rating: '2.79',
        quantity: 88,
        sold: 24,
        view: 112,
        category_id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
            name: 'Symfony',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'ce673c4e-26ed-4294-bc45-fe752374529d',
        image: 'python.png',
        images: ['python.png'],
        course_code: 'COURSE014',
        name: 'Khóa học số 14',
        description: 'Mô tả cho khóa học số 14.',
        year: 2025,
        credit: 3,
        price: '2300000.00',
        rating: '2.59',
        quantity: 87,
        sold: 26,
        view: 113,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'fb541253-9e92-4eb0-9fea-b3fd879123e0',
        image: 'js.png',
        images: ['js.png'],
        course_code: 'COURSE015',
        name: 'Khóa học số 15',
        description: 'Mô tả cho khóa học số 15.',
        year: 2025,
        credit: 3,
        price: '2400000.00',
        price_before_discount: '3900000.00',
        rating: '2.03',
        quantity: 86,
        sold: 28,
        view: 114,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '5d96df38-770c-4cf7-8e66-9aaf01e9b14a',
        image: 'react.jpg',
        images: ['react.jpg'],
        course_code: 'COURSE016',
        name: 'Khóa học số 16',
        description: 'Mô tả cho khóa học số 16.',
        year: 2025,
        credit: 3,
        price: '2500000.00',
        rating: '2.98',
        quantity: 85,
        sold: 30,
        view: 115,
        category_id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
            name: 'PHP',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '824941e8-5ab0-4304-91a7-263dc5ab86bb',
        image: 'js.png',
        images: ['js.png'],
        course_code: 'COURSE017',
        name: 'Khóa học số 17',
        description: 'Mô tả cho khóa học số 17.',
        year: 2025,
        credit: 3,
        price: '2600000.00',
        rating: '3.36',
        quantity: 84,
        sold: 32,
        view: 116,
        category_id: '7367354b-fc00-4ac7-96bd-dd9e2324458d',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '7367354b-fc00-4ac7-96bd-dd9e2324458d',
            name: 'Node.js',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'eb514fb2-8861-4f91-88d5-7a97b6bf5983',
        image: 'js.png',
        images: ['js.png'],
        course_code: 'COURSE018',
        name: 'Khóa học số 18',
        description: 'Mô tả cho khóa học số 18.',
        year: 2025,
        credit: 3,
        price: '2700000.00',
        rating: '1.25',
        quantity: 83,
        sold: 34,
        view: 117,
        category_id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
            name: 'PHP',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '2c5bac5f-74c6-4c30-b10e-053b95e431bc',
        image: 'js.png',
        images: ['js.png'],
        course_code: 'COURSE019',
        name: 'Khóa học số 19',
        description: 'Mô tả cho khóa học số 19.',
        year: 2025,
        credit: 3,
        price: '2800000.00',
        rating: '3.91',
        quantity: 82,
        sold: 36,
        view: 118,
        category_id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
            name: 'ReactJS',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '0f1c23ad-2bc8-42a0-ad99-70dbfce2916c',
        image: 'laravel.png',
        images: ['laravel.png'],
        course_code: 'COURSE020',
        name: 'Khóa học số 20',
        description: 'Mô tả cho khóa học số 20.',
        year: 2025,
        credit: 3,
        price: '2900000.00',
        price_before_discount: '4400000.00',
        rating: '4.25',
        quantity: 81,
        sold: 38,
        view: 119,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: 'e94f94ea-d6eb-42d9-97a5-2c24836230a8',
        image: 'python.png',
        images: ['python.png'],
        course_code: 'COURSE021',
        name: 'Khóa học số 21',
        description: 'Mô tả cho khóa học số 21.',
        year: 2025,
        credit: 3,
        price: '3000000.00',
        price_before_discount: '4500000.00',
        rating: '1.16',
        quantity: 80,
        sold: 40,
        view: 120,
        category_id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '1ecadd5f-4db0-44e2-be3c-31917998d9ac',
            name: 'ReactJS',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '4a27f23e-64ca-439a-8c76-123180bf1f11',
        image: 'laravel.png',
        images: ['laravel.png'],
        course_code: 'COURSE022',
        name: 'Khóa học số 22',
        description: 'Mô tả cho khóa học số 22.',
        year: 2025,
        credit: 3,
        price: '3100000.00',
        rating: '4.44',
        quantity: 79,
        sold: 42,
        view: 121,
        category_id: '6b9c047d-d349-4837-868d-e93adce9ffad',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '6b9c047d-d349-4837-868d-e93adce9ffad',
            name: 'Laravel',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '6a4ca177-6dd4-49e5-9a78-a2d840963ec0',
        image: 'react.jpg',
        images: ['react.jpg'],
        course_code: 'COURSE023',
        name: 'Khóa học số 23',
        description: 'Mô tả cho khóa học số 23.',
        year: 2025,
        credit: 3,
        price: '3200000.00',
        price_before_discount: '4700000.00',
        rating: '2.56',
        quantity: 78,
        sold: 44,
        view: 122,
        category_id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
            name: 'JavaScript',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '0fb3dfce-3060-4157-853d-0fdb45e54a66',
        image: 'react.jpg',
        images: ['react.jpg'],
        course_code: 'COURSE024',
        name: 'Khóa học số 24',
        description: 'Mô tả cho khóa học số 24.',
        year: 2025,
        credit: 3,
        price: '3300000.00',
        price_before_discount: '4800000.00',
        rating: '1.59',
        quantity: 77,
        sold: 46,
        view: 123,
        category_id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '2f0bdd81-a5e1-4a5c-9fff-f6e8add7d9af',
            name: 'PHP',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    },
    {
        id: '206818e3-9f07-46fa-843f-f5a937f81cb6',
        image: 'zustand.png',
        images: ['zustand.png'],
        course_code: 'COURSE025',
        name: 'Khóa học số 25',
        description: 'Mô tả cho khóa học số 25.',
        year: 2025,
        credit: 3,
        price: '3400000.00',
        price_before_discount: '4900000.00',
        rating: '1.43',
        quantity: 76,
        sold: 48,
        view: 124,
        category_id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
        created_at: '2025-07-13T07:38:22.896Z',
        updated_at: '2025-07-13T07:38:22.896Z',
        category: {
            id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
            name: 'Symfony',
            created_at: '2025-05-20T03:15:39.000000Z',
            updated_at: '2025-05-20T03:15:39.000000Z'
        }
    }
]

export function courses(mock: MockAdapter) {
    mock.onGet(new RegExp(`^/courses/[^/]+$`)).reply((config) => {
        const id = config.url?.split('/').pop()
        const course = coursesData.find((course) => course.id === id)
        if (!course) {
            return [
                404,
                {
                    success: false,
                    message: 'Course not found',
                    errors: []
                }
            ]
        } else {
            return [
                200,
                {
                    success: true,
                    message: 'Get all courses success',
                    data: course
                }
            ]
        }
    })

    mock.onGet(/\/courses.*/).reply((config) => {
        const query = config.params

        if (!query) {
            return [400, { success: false, message: 'Invalid query parameters' }]
        }

        const page = parseInt((query.page as string) || '1')
        const limit = parseInt((query.limit as string) || '10')
        const sortBy = (query.sort_by as string) || 'created_at'
        const order = (query.order as string) || 'desc'
        const category = query.category as string
        const priceMin = parseFloat(query.price_min as string)
        const priceMax = parseFloat(query.price_max as string)
        const rating = parseFloat(query.rating_filter as string)
        const name = query.name as string

        let filtered = [...coursesData]

        if (category) {
            filtered = filtered.filter((c) => c.category?.name === category)
        }

        if (!isNaN(priceMin)) {
            filtered = filtered.filter((c) => parseFloat(c.price) >= priceMin)
        }

        if (!isNaN(priceMax)) {
            filtered = filtered.filter((c) => parseFloat(c.price) <= priceMax)
        }

        if (!isNaN(rating) && rating > 0) {
            filtered = filtered.filter((c) => {
                const courseRating = c.rating ? parseFloat(c.rating) : 0
                const result = courseRating >= rating
                return result
            })
        }

        if (name) {
            filtered = filtered.filter((c) => c.name.includes(name) || c.course_code.includes(name))
        }

        const allowedSortFields: (keyof Course)[] = [
            'name',
            'year',
            'view',
            'price',
            'course_code',
            'created_at',
            'credit',
            'sold',
            'rating'
        ]

        if (allowedSortFields.includes(sortBy as keyof Course)) {
            filtered.sort((a, b) => {
                const valA = a[sortBy as keyof Course]
                const valB = b[sortBy as keyof Course]

                if (typeof valA === 'number' && typeof valB === 'number') {
                    return order === 'asc' ? valA - valB : valB - valA
                }

                return order === 'asc'
                    ? String(valA).localeCompare(String(valB))
                    : String(valB).localeCompare(String(valA))
            })
        }

        const totalItems = filtered.length
        const totalPages = Math.ceil(totalItems / limit)
        const paginated = filtered.slice((page - 1) * limit, page * limit)

        return [
            200,
            {
                success: true,
                message: 'Get all courses success',
                data: paginated,
                meta: {
                    page,
                    limit,
                    total_items: totalItems,
                    total_pages: totalPages
                }
            }
        ]
    })

    mock.onPost('/courses').reply((config) => {
        const newCourseData = JSON.parse(config.data) as Omit<Course, 'id' | 'created_at' | 'updated_at'>
        const newId = uuidv4()
        const courseWithId: Course = {
            ...newCourseData,
            id: newId,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            image: newCourseData.image || 'https://cloud.z.com/vn/wp-content/uploads/2023/04/Screenshot_2-1.png',
            images: newCourseData.images || ['https://cloud.z.com/vn/wp-content/uploads/2023/04/Screenshot_2-1.png'],
            price_before_discount: undefined,
            rating: newCourseData.rating || '0.00',
            category_id: newCourseData.category_id || '46c0ec3c-bad7-4e6b-8830-bd3790f56621',
            description: newCourseData.description || '',
            name: newCourseData.name || `Khóa học số ${courses.length + 1}`,
            course_code: newCourseData.course_code || `COURSE${(courses.length + 1).toString().padStart(3, '0')}`,
            category: newCourseData.category || {
                id: '46c0ec3c-bad7-4e6b-8830-bd3790f56621',
                name: 'JavaScript',
                created_at: '2025-05-20T03:15:39.000000Z',
                updated_at: '2025-05-20T03:15:39.000000Z'
            }
        }

        coursesData.push(courseWithId)

        return [201, { success: true, message: 'Course created', data: courseWithId }]
    })

    mock.onPut(new RegExp(`^/courses/[^/]+$`)).reply((config) => {
        const id = config.url?.split('/').pop()
        const courseIndex = coursesData.findIndex((course) => course.id === id)

        if (courseIndex === -1) {
            return [
                404,
                {
                    success: false,
                    message: 'Course not found 3',
                    errors: []
                }
            ]
        }

        const updatedCourseData = JSON.parse(config.data) as Partial<Omit<Course, 'id' | 'created_at' | 'updated_at'>>
        const existingCourse = coursesData[courseIndex]

        const updatedCourse: Course = {
            ...existingCourse,
            ...updatedCourseData,
            updated_at: new Date().toISOString(),
            image: updatedCourseData.image || existingCourse.image,
            images: updatedCourseData.images || existingCourse.images,
            price_before_discount: updatedCourseData.price_before_discount ?? existingCourse.price_before_discount,
            rating: updatedCourseData.rating || existingCourse.rating || '0.00',
            category_id: updatedCourseData.category_id || existingCourse.category_id,
            description: updatedCourseData.description || existingCourse.description || '',
            name: updatedCourseData.name || existingCourse.name || `Khóa học số ${courseIndex + 1}`,
            course_code:
                updatedCourseData.course_code ||
                existingCourse.course_code ||
                `COURSE${(courseIndex + 1).toString().padStart(3, '0')}`,
            category: updatedCourseData.category || existingCourse.category
        }

        coursesData[courseIndex] = updatedCourse

        return [
            200,
            {
                success: true,
                message: 'Course updated successfully',
                data: updatedCourse
            }
        ]
    })

    mock.onDelete(/\/courses\/[^/]+/).reply((config) => {
        const match = config.url?.match(/\/courses\/([^/]+)/)
        const id = match ? match[1] : null

        if (!id) {
            return [400, { success: false, message: 'Invalid course ID' }]
        }

        const index = coursesData.findIndex((course) => course.id === id)

        if (index === -1) {
            return [404, { success: false, message: 'Course not found' }]
        }

        coursesData.splice(index, 1)

        return [
            200,
            {
                success: true,
                message: 'Course deleted successfully'
            }
        ]
    })
}
