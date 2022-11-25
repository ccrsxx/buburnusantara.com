import {
  imageModal,
  viewableImages,
  imageModalImage,
  imageModalLinks,
  imageModalBackdrop
} from '@lib/elements';

viewableImages.forEach((viewableImage) =>
  viewableImage.addEventListener('click', handleImageModalOpen)
);

imageModal.addEventListener('click', handleImageModalClose);
imageModal.addEventListener('cancel', handleImageModalClose);

function handleImageModalOpen(e: MouseEvent): void {
  document.body.style.overflow = 'hidden';

  const { src, alt } = e.target as HTMLImageElement;

  imageModalImage.src = src;
  imageModalImage.alt = alt;

  imageModalLinks.forEach((imageModalLink, index) => {
    imageModalLink.href = src;
    if (!index) imageModalLink.textContent = alt;
  });

  imageModal.showModal();
  imageModalBackdrop.classList.add('active');
}

function handleImageModalClose(): void {
  document.body.style.overflow = '';

  imageModal.close();
  imageModalBackdrop.classList.remove('active');
}
