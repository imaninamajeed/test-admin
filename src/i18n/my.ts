import { TranslationMessages } from "react-admin";
import malayMessages from "ra-language-malay"; // Assuming there's a Malay base translation available

const customMalayMessages: TranslationMessages = {
  ...malayMessages,
  pos: {
    search: "Cari",
    configuration: "Konfigurasi",
    language: "Bahasa",
    theme: {
      name: "Tema",
      light: "Cerah",
      dark: "Gelap",
    },
    dashboard: {
      monthly_revenue: "Pendapatan Bulanan",
      month_history: "Sejarah Pendapatan 30 Hari",
      new_orders: "Pesanan Baru",
      pending_reviews: "Ulasan Tertunda",
      all_reviews: "Lihat semua ulasan",
      new_customers: "Pelanggan Baru",
      all_customers: "Lihat semua pelanggan",
      pending_orders: "Pesanan Tertunda",
      order: {
        items:
          "oleh %{customer_name}, satu item |||| oleh %{customer_name}, %{nb_items} item",
      },
      welcome: {
        title: "Selamat datang ke demo e-commerce react-admin",
        subtitle:
          "Ini adalah admin bagi kedai poster rekaan. Sila eksplor dan ubah data - ia adalah tempatan kepada komputer anda, dan akan reset setiap kali anda muat semula.",
        ra_button: "Laman web react-admin",
        demo_button: "Sumber untuk demo ini",
      },
    },
    menu: {
      sales: "Jualan",
      catalog: "Katalog",
      customers: "Pelanggan",
    },
    events: {
      review: {
        title: 'Ulasan pada "%{product}"',
      },
      order: {
        title: "Pesanan 1 poster |||| Pesanan %{smart_count} poster",
      },
    },
  },
  resources: {
    customers: {
      name: "Pelanggan |||| Pelanggan",
      fields: {
        address: "Alamat",
        birthday: "Tarikh Lahir",
        city: "Bandar",
        orders: "Pesanan",
        first_seen: "Pertama kali dilihat",
        full_name: "Nama",
        groups: "Segmen",
        last_seen: "Terakhir dilihat",
        last_seen_gte: "Dilawati sejak",
        name: "Nama",
        total_spent: "Jumlah dibelanjakan",
        password: "Kata laluan",
        confirm_password: "Sahkan kata laluan",
        stateAbbr: "Negeri",
      },
      filters: {
        last_visited: "Lawatan terakhir",
        today: "Hari ini",
        this_week: "Minggu ini",
        last_week: "Minggu lepas",
        this_month: "Bulan ini",
        last_month: "Bulan lepas",
        earlier: "Sebelum ini",
        has_ordered: "Pernah membuat pesanan",
        has_newsletter: "Berita e-mel",
        group: "Segmen",
      },
      fieldGroups: {
        identity: "Identiti",
        address: "Alamat",
        stats: "Statistik",
        history: "Sejarah",
        password: "Kata laluan",
        change_password: "Tukar Kata Laluan",
      },
      page: {
        delete: "Padamkan Pelanggan",
      },
      errors: {
        password_mismatch:
          "Pengesahan kata laluan tidak sama dengan kata laluan.",
      },
    },
    orders: {
      name: "Pesanan |||| Pesanan",
      amount: "1 pesanan |||| %{smart_count} pesanan",
      title: "Pesanan %{reference}",
      fields: {
        basket: {
          delivery: "Penghantaran",
          reference: "Rujukan",
          quantity: "Kuantiti",
          sum: "Jumlah",
          tax_rate: "Kadar Cukai",
          taxes: "Cukai",
          total: "Jumlah Keseluruhan",
          unit_price: "Harga Seunit",
        },
        address: "Alamat",
        customer_id: "Pelanggan",
        date_gte: "Tarikh sejak",
        date_lte: "Tarikh sebelum",
        nb_items: "Bilangan Item",
        total_gte: "Jumlah minimum",
        status: "Status",
        returned: "Dipulangkan",
      },
      section: {
        order: "Pesanan",
        customer: "Pelanggan",
        shipping_address: "Alamat Penghantaran",
        items: "Item",
        total: "Jumlah Keseluruhan",
      },
    },
    invoices: {
      name: "Invois |||| Invois",
      fields: {
        date: "Tarikh Invois",
        customer_id: "Pelanggan",
        order_id: "Pesanan",
        date_gte: "Tarikh sejak",
        date_lte: "Tarikh sebelum",
        total_gte: "Jumlah minimum",
        address: "Alamat",
      },
    },
    products: {
      name: "Poster |||| Poster",
      fields: {
        category_id: "Kategori",
        height_gte: "Tinggi min",
        height_lte: "Tinggi maks",
        height: "Tinggi",
        image: "Imej",
        price: "Harga",
        reference: "Rujukan",
        sales: "Jualan",
        stock_lte: "Stok Rendah",
        stock: "Stok",
        thumbnail: "Gambar Kecil",
        width_gte: "Lebar min",
        width_lte: "Lebar maks",
        width: "Lebar",
      },
      tabs: {
        image: "Imej",
        details: "Butiran",
        description: "Penerangan",
        reviews: "Ulasan",
      },
      filters: {
        categories: "Kategori",
        stock: "Stok",
        no_stock: "Tiada stok",
        low_stock: "1 - 9 item",
        average_stock: "10 - 49 item",
        enough_stock: "50 item & lebih",
        sales: "Jualan",
        best_sellers: "Paling Laris",
        average_sellers: "Sedang",
        low_sellers: "Kurang laris",
        never_sold: "Tidak Pernah Terjual",
      },
    },
    categories: {
      name: "Kategori |||| Kategori",
      fields: {
        products: "Produk",
      },
    },
    reviews: {
      name: "Ulasan |||| Ulasan",
      amount: "1 ulasan |||| %{smart_count} ulasan",
      relative_to_poster: "Ulasan pada poster",
      detail: "Butiran ulasan",
      fields: {
        customer_id: "Pelanggan",
        order_id: "Pesanan",
        product_id: "Produk",
        date_gte: "Ditulis sejak",
        date_lte: "Ditulis sebelum",
        date: "Tarikh",
        comment: "Komen",
        rating: "Penilaian",
      },
      action: {
        accept: "Terima",
        reject: "Tolak",
      },
      notification: {
        approved_success: "Ulasan diterima",
        approved_error: "Ralat: Ulasan tidak diterima",
        rejected_success: "Ulasan ditolak",
        rejected_error: "Ralat: Ulasan tidak ditolak",
      },
    },
    segments: {
      name: "Segmen |||| Segmen",
      fields: {
        customers: "Pelanggan",
        name: "Nama",
      },
      data: {
        compulsive: "Kompulsif",
        collector: "Pengumpul",
        ordered_once: "Pernah membuat pesanan",
        regular: "Kerap",
        returns: "Pulangan",
        reviewer: "Penilai",
      },
    },
  },
};

export default customMalayMessages;
