export default function HomePage() {
  const projects = [
    {
      id: 1,
      title: 'Nhà phố hiện đại',
      area: '120m²',
      price: '2.4 tỷ',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Biệt thự sân vườn',
      area: '250m²',
      price: '5.8 tỷ',
      image:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Nhà cấp 4 hiện đại',
      area: '90m²',
      price: '1.2 tỷ',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  const gallery = [
    {
      title: 'Villa nghỉ dưỡng',
      size: '350m²',
      price: '6.2 tỷ',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Nhà phố mặt tiền',
      size: '150m²',
      price: '3.1 tỷ',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Biệt thự hiện đại',
      size: '280m²',
      price: '5.6 tỷ',
      image:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Nhà vườn xanh mát',
      size: '200m²',
      price: '3.8 tỷ',
      image:
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <main className="bg-[#07140d] text-white min-h-screen overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="text-3xl font-bold tracking-widest">
            NHÀ TIỆN LỢI
          </div>

          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-white/80">
            <a href="#">Trang chủ</a>
            <a href="#">Mẫu nhà</a>
            <a href="#">Bộ sưu tập</a>
            <a href="#">Liên hệ</a>
          </nav>

          <div className="text-sm text-green-300">0981 939 421</div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-green-300 mb-6">
              Xây nhanh - Ở xanh
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              NHÀ
              <br />
              TIỆN LỢI
            </h1>

            <p className="text-lg text-white/70 leading-8 max-w-xl mb-10">
              Giải pháp nhà hiện đại tối ưu công năng, xây dựng nhanh,
              không gian sống xanh và tinh tế.
            </p>

            <button className="bg-green-700 hover:bg-green-600 transition px-10 py-5 rounded-full text-sm uppercase tracking-widest">
              Xem bộ sưu tập
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="uppercase tracking-[0.3em] text-green-300 mb-4">
                Mẫu nhà nổi bật
              </p>

              <h2 className="text-5xl font-black">MẪU NHÀ</h2>
            </div>

            <p className="text-white/60 max-w-md text-right hidden md:block">
              Những thiết kế tối ưu công năng, mang đậm dấu ấn hiện đại và
              thiên nhiên.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((item, index) => (
              <div
                key={item.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="overflow-hidden rounded-[40px] border border-green-900/50">
                  <img
                    src={item.image}
                    className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                <div>
                  <div className="text-green-300 mb-4 text-sm tracking-[0.3em]">
                    0{index + 1}
                  </div>

                  <h3 className="text-5xl font-bold mb-6 uppercase">
                    {item.title}
                  </h3>

                  <div className="flex gap-6 text-white/60 mb-8 text-sm">
                    <span>{item.area}</span>
                    <span>•</span>
                    <span>{item.price}</span>
                  </div>

                  <p className="text-white/70 leading-8 mb-10 max-w-lg">
                    Thiết kế hiện đại, tối ưu ánh sáng tự nhiên và không gian
                    xanh cho trải nghiệm sống đẳng cấp.
                  </p>

                  <button className="border border-green-700 hover:bg-green-700 transition px-8 py-4 rounded-full uppercase tracking-widest text-sm">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY APPLE STYLE */}
      <section className="bg-[#f5f5f0] text-black py-28 overflow-hidden">
        <div className="text-center mb-16 px-6">
          <p className="uppercase tracking-[0.3em] text-green-700 mb-4">
            Cám ơn bạn đã ghé thăm
          </p>

          <h2 className="text-6xl font-black mb-6">Thư viện cảm hứng</h2>

          <p className="text-black/60 max-w-2xl mx-auto">
            Khám phá những không gian sống hiện đại, xanh và đầy cảm xúc.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto px-10 pb-10 snap-x snap-mandatory scrollbar-hide">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[420px] h-[620px] rounded-[40px] overflow-hidden relative group snap-center flex-shrink-0"
            >
              <img
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h3 className="text-4xl font-bold mb-4">{item.title}</h3>

                <div className="text-white/70 mb-6">
                  {item.size} • {item.price}
                </div>

                <button className="bg-white text-black px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-green-300 transition">
                  Khám phá
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="text-3xl font-bold mb-6">NHÀ TIỆN LỢI</div>

            <p className="text-white/60 leading-8">
              Xây nhanh - Ở xanh
              <br />
              Không gian sống hiện đại.
            </p>
          </div>

          <div>
            <div className="font-bold mb-6 uppercase tracking-widest">
              Liên hệ
            </div>

            <div className="space-y-4 text-white/60">
              <div>0981 939 421</div>
              <div>contact@nhatientloi.vn</div>
              <div>Nha Trang, Khánh Hòa</div>
            </div>
          </div>

          <div>
            <div className="font-bold mb-6 uppercase tracking-widest">
              Danh mục
            </div>

            <div className="space-y-4 text-white/60">
              <div>Trang chủ</div>
              <div>Mẫu nhà</div>
              <div>Bộ sưu tập</div>
              <div>Liên hệ</div>
            </div>
          </div>

          <div>
            <div className="font-bold mb-6 uppercase tracking-widest">
              Google Sheet API
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-sm text-white/60 leading-7">
              Dữ liệu ảnh, giá, diện tích sẽ được load realtime từ Google Sheet.
            </div>
          </div>
        </div>

        <div className="text-center text-white/30 mt-20 text-sm">
          © 2026 NHÀ TIỆN LỢI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
