import { whatsappLink } from "@/lib/nursery-data";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hello R.K Nursery, I would like to know more about your plants.")}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lift transition-all duration-300 hover:scale-105 hover:bg-[#1ebe57] hover:shadow-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.2-.7.2-1.06 0-.158-.043-.358-.115-.515-.214-.43-.5-.43-.916-.616-.286-.13-1.564-.787-1.793-.787zM16.115 27.808c-1.832 0-3.65-.516-5.21-1.49l-3.65 1.16 1.193-3.55a9.804 9.804 0 0 1-1.892-5.798c0-5.434 4.452-9.885 9.885-9.885 5.434 0 9.886 4.45 9.886 9.885 0 5.434-4.452 9.886-9.886 9.886zm0-21.78c-6.55 0-11.894 5.342-11.894 11.893 0 2.106.546 4.16 1.59 5.967l-1.726 5.14 5.32-1.708a11.846 11.846 0 0 0 5.71 1.46c6.55 0 11.894-5.342 11.894-11.892 0-6.55-5.344-11.893-11.894-11.893z" />
      </svg>
      <span className="hidden sm:inline">Chat with us on WhatsApp</span>
    </a>
  );
}
