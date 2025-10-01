export default function PortfolioApp() {
  return (
    <>
      {/* استایل سفارشی برای Liquid Button */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <main className="font-sans min-h-screen bg-gray-50 flex items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-8 text-purple-700">
            تست دکمه مایع
          </h1>

          {/* Liquid Button نمایش داده شده در اینجا */}
          <LiquidButton>ارسال پیام</LiquidButton>
        </div>
      </main>
    </>
  );
}
