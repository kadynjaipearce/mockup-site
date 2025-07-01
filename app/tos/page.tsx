export default function TosPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16 flex flex-col gap-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Terms of Service
      </h1>
      <p className="text-base md:text-lg text-gray-700">
        This is a placeholder for the Terms of Service. Please consult with your
        legal advisor to provide the appropriate content for your business. By
        using this website, you agree to the following terms and conditions...
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Services are provided by Bunbury Wellness Remedial Massage in Bunbury,
          WA.
        </li>
        <li>All bookings are subject to availability and confirmation.</li>
        <li>
          Personal information is handled in accordance with our privacy policy.
        </li>
        <li>
          For any questions, please contact us via the details on our Contact
          page.
        </li>
      </ul>
    </main>
  );
}
