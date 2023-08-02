import axios from 'axios';

const uploadImageToBackend = async (base64Image) => {
  try {
    // API URL'ini değiştirin ve gerekli istek formatını belirleyin
    const apiUrl = 'https://example.com/upload_image';
    const response = await axios.post(apiUrl, { image: base64Image });
    console.log('Gönderilen fotoğrafın cevabı:', response.data);
  } catch (error) {
    console.log('Fotoğraf yükleme hatası:', error);
  }
};

export { uploadImageToBackend };
