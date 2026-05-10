export default function NhaTienLoiLandingPage() {
  const houses = [
    {
      title: 'Tiny House',
      size: '30 - 45m²',
      price: 'Từ 350 triệu',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Eco Villa',
      size: '80 - 150m²',
      price: 'Từ 1.2 tỷ',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Farm Stay',
      size: '60 - 90m²',
      price: 'Từ 650 triệu',
      image:
        'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Prefab Office',
      size: '90 - 200m²',
      price: 'Từ 700 triệu',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const materials = [
    {
      title: 'Kết cấu sắt hình',
      desc: 'Khung thép V và hộp mạ kẽm chống ăn mòn, độ bền cao.',
    },
    {
      title: 'Bê tông nhẹ',
      desc: 'Giảm tải trọng, cách nhiệt tốt, thi công nhanh.',
    },
    {
      title: 'Panel cách nhiệt',
      desc: 'Giữ nhiệt ổn định và giảm tiêu thụ điện năng.',
    },
    {
      title: 'Kính Low-E',
      desc: 'Tối ưu ánh sáng tự nhiên và giảm nhiệt.',
    },
  ];

  const benefits = [
    'Thi công nhanh chỉ từ 2 - 8 tuần',
    'Giảm phát thải CO₂ trong xây dựng',
    'Tiết kiệm điện năng vận hành',
    'Có thể tháo lắp và mở rộng dễ dàng',
  ];

  return (
    <div className="bg-white text-zinc-800">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-green-700 lowercase">
              nhà tiện lợi
            </h1>
            <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase">
              xây nhanh ở xanh
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-green-700">
              Trang chủ
            </a>
            <a href="#mau-nha" className="hover:text-green-700">
              Mẫu nhà
            </a>
            <a href="#vat-lieu" className="hover:text-green-700">
              Vật liệu
            </a>
            <a href="#du-an" className="hover:text-green-700">
              Dự án
            </a>
            <a href="#lien-he" className="hover:text-green-700">
              Liên hệ
            </a>
          </nav>

          <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg transition-all">
            Nhận tư vấn
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-28">
          <div>
            <div className="inline-flex bg-green-500/20 border border-green-400 text-green-200 px-4 py-2 rounded-full mb-6 backdrop-blur">
              NHÀ LẮP GHÉP THẾ HỆ MỚI
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              XÂY NHANH
              <br />
              <span className="text-green-400">Ở XANH</span>
            </h2>

            <p className="text-zinc-200 text-lg leading-8 mb-10 max-w-xl">
              Giải pháp nhà lắp ghép hiện đại với kết cấu sắt hình và vật
              liệu bê tông nhẹ giúp giảm phát thải, tối ưu chi phí và hoàn
              thiện nhanh chóng.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl transition-all">
                Xem mẫu nhà
              </button>

              <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur hover:bg-white/20 transition-all">
                Nhận tư vấn miễn phí
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-2xl max-w-md ml-auto">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-black text-green-700">-60%</p>
                  <p className="text-zinc-600">Giảm phát thải CO₂</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                  ♻️
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-black text-green-700">+50%</p>
                  <p className="text-zinc-600">Tiết kiệm điện năng</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                  ⚡
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-black text-green-700">2-8</p>
                  <p className="text-zinc-600">Tuần thi công</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                  🏗️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-5">
                🌿
              </div>
              <h3 className="font-bold text-xl leading-8">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section id="vat-lieu" className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
              Công nghệ & vật liệu
            </p>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Kết cấu sắt hình
              <br />
              kết hợp bê tông nhẹ
            </h2>

            <p className="text-zinc-600 text-lg leading-9 mb-10">
              Hệ khung thép được gia công chuẩn module giúp thi công nhanh,
              chịu lực cao và dễ mở rộng. Vật liệu bê tông nhẹ giảm tải trọng
              công trình, tăng khả năng cách nhiệt và giảm chi phí vận hành.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {materials.map((item, index) => (
                <div
                  key={index}
                  className="border border-zinc-200 rounded-3xl p-6 hover:border-green-500 transition-all"
                >
                  <h3 className="font-black text-xl mb-3 text-green-700">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-10 -left-10 bg-white rounded-3xl p-8 shadow-2xl max-w-sm border border-zinc-100">
              <p className="text-4xl font-black text-green-700 mb-2">
                30%
              </p>
              <p className="text-zinc-600 leading-7">
                Giảm tải trọng công trình nhờ ứng dụng bê tông nhẹ và module
                thép tối ưu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOUSE COLLECTION */}
      <section id="mau-nha" className="py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
            <div>
              <p className="uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
                Bộ sưu tập
              </p>
              <h2 className="text-5xl font-black leading-tight">
                Mẫu nhà lắp ghép xanh
              </h2>
            </div>

            <button className="border border-green-700 text-green-700 px-6 py-4 rounded-2xl font-bold hover:bg-green-700 hover:text-white transition-all">
              Xem tất cả mẫu nhà
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {houses.map((house, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="overflow-hidden h-72">
                  <img
                    src={house.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black">{house.title}</h3>
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      {house.size}
                    </span>
                  </div>

                  <p className="text-green-700 font-black text-2xl mb-6">
                    {house.price}
                  </p>

                  <button className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
            Quy trình thi công
          </p>

          <h2 className="text-5xl font-black mb-20">
            Từ thiết kế đến hoàn thiện
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'Tư vấn',
              'Thiết kế',
              'Gia công',
              'Vận chuyển',
              'Lắp đặt',
              'Hoàn thiện',
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-black mb-6 shadow-xl">
                  {index + 1}
                </div>
                <h3 className="font-black text-xl">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-green-950/80" />

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Sống xanh không chỉ là xu hướng
            <br />
            mà là tương lai.
          </h2>

          <p className="text-xl text-green-100 leading-9 max-w-3xl mx-auto mb-12">
            Nhà Tiện Lợi mang đến giải pháp nhà lắp ghép hiện đại với kết cấu
            sắt hình và bê tông nhẹ, giúp xây dựng nhanh, bền vững và thân
            thiện môi trường.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all">
              Đăng ký tư vấn
            </button>

            <button className="border border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all">
              Tải catalogue PDF
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="lien-he"
        className="bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-black text-white lowercase mb-3">
              nhà tiện lợi
            </h2>
            <p className="uppercase tracking-[0.25em] text-green-500 text-xs mb-8">
              xây nhanh ở xanh
            </p>

            <p className="leading-8">
              Giải pháp nhà lắp ghép xanh ứng dụng kết cấu sắt hình và vật
              liệu bê tông nhẹ.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-6">Dịch vụ</h3>
            <ul className="space-y-4">
              <li>Nhà lắp ghép</li>
              <li>Eco Villa</li>
              <li>Farm Stay</li>
              <li>Prefab Office</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-6">Công nghệ</h3>
            <ul className="space-y-4">
              <li>Kết cấu sắt hình</li>
              <li>Bê tông nhẹ</li>
              <li>Panel cách nhiệt</li>
              <li>Smart Home</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li>Hotline: 0901 234 567</li>
              <li>Email: info@nhatienloi.vn</li>
              <li>Nha Trang, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-zinc-800 text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Nhà Tiện Lợi. All rights reserved.</p>
          <p>XÂY NHANH • Ở XANH</p>
        </div>
      </footer>
    </div>
  );
}
