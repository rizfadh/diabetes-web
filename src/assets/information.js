import { FaUniversity } from 'react-icons/fa'
import { SiFastapi, SiGooglecolab, SiReact } from 'react-icons/si'

const information = [
    {
        Icon: FaUniversity,
        text: 'Dataset didapatkan dari University of California, Irvine',
        link: 'https://archive.ics.uci.edu/dataset/529/early+stage+diabetes+risk+prediction+dataset',
    },
    {
        Icon: SiGooglecolab,
        text: 'Menggunakan algoritma machine learning decision tree CART dengan akurasi sebesar 97%',
        link: 'https://colab.research.google.com/drive/1hcC30k1uCkkQSVC1tIu8p5l3PqaXbY__?usp=sharing',
    },
    {
        Icon: SiFastapi,
        text: 'Pembuatan REST API menggunakan framework FastAPI python',
        link: 'https://github.com/rizfadh/diabetes-restapi',
    },
    {
        Icon: SiReact,
        text: 'Pembuatan Frontend menggunakan library React',
        link: 'https://github.com/rizfadh/diabetes-web',
    },
]

export default information
