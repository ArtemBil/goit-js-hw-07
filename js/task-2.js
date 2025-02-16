/**
 * @typedef {object} Image
 * @property {string} url - image url
 * @property {string} alt - image alternative text
 * @property {number} width - image width
 * @property {number} height - image height
 */

const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
        width: 360,
        height: 300
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
        width: 360,
        height: 300
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
        width: 360,
        height: 300
    },
];

/**
 * Create html string based on image conf object
 *
 * @param {Image} image
 * @return string
 */
const generateGalleryTemplate = (image) =>  `
 <li>
    <img src="${image.url}" alt="${image.alt}" width="${image.width}" height="${image.height}">
</li>
`;

const template = images.map(generateGalleryTemplate).join("");
const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('afterbegin', template);