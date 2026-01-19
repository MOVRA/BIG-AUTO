# BIG-AUTO Frontend

Dokumentasi ini menjelaskan struktur, arsitektur, dan konvensi pengembangan **Frontend BIG-AUTO**. Dokumen ini ditujukan untuk memudahkan developer baru maupun existing dalam memahami alur kerja dan struktur folder project.

---

## 🧩 Tentang Aplikasi

**Big Auto** adalah aplikasi frontend yang dibangun dengan pendekatan **feature-based architecture**, sehingga setiap fitur berdiri relatif independen, terstruktur, dan scalable untuk pengembangan jangka panjang.

---

## 🛠️ Tech Stack (Asumsi Umum)

> Sesuaikan bila ada perbedaan

* **React + TypeScript**
* **State Management**: (Zustand / Redux / TanStack Query)
* **Form Handling**: React Hook Form + Zod
* **HTTP Client**: Axios / Fetch
* **Build Tool**: Vite / Webpack

---

## 📁 Struktur Folder Utama

```
big-auto/
├─ dist/                # Build output (production)
├─ node_modules/        # Dependencies
├─ public/              # Static public assets
├─ src/                 # Source code utama
└─ README.md
```

---

## 📂 Struktur `src/`

```
src/
├─ assets/      # Asset statis (icons, images, fonts)
├─ common/      # Helper / util reusable lintas fitur
├─ db/          # Dummy data / local data (mock)
├─ features/    # Feature-based modules (inti aplikasi)
├─ hooks/       # Global reusable hooks
├─ layout/      # Layout wrapper (auth, dashboard, etc)
├─ lib/         # Library abstraction / config (axios, queryClient, etc)
├─ models/      # Global types / interfaces
```

---

## ⭐ Feature-Based Architecture (`src/features`)

Setiap folder di dalam `features` merepresentasikan **1 fitur / halaman utama** aplikasi.

### Contoh Struktur Feature

```
features/
└─ sign-in/
   ├─ components-sign-in/
   ├─ hooks-sign-in/
   ├─ models-sign-in/
   ├─ schema-sign-in/
   ├─ service-sign-in/
   └─ store-sign-in/
```

### Penjelasan Subfolder

| Folder         | Fungsi                              |
| -------------- | ----------------------------------- |
| `components-*` | Komponen UI khusus fitur tersebut   |
| `hooks-*`      | Custom hooks khusus fitur           |
| `models-*`     | TypeScript types / interfaces fitur |
| `schema-*`     | Schema validasi (Zod / Yup)         |
| `service-*`    | API service / HTTP request          |
| `store-*`      | State management khusus fitur       |

> ❗ **Catatan**: Nama folder selalu mengikuti pola `nama-folder-nama-fitur` untuk konsistensi dan keterbacaan.

---

## 📌 Daftar Feature Saat Ini

### 🏠 Home

```
features/home/
├─ components-home
├─ hooks-home
├─ model-home
├─ service-home
└─ store-home
```

Digunakan untuk:

* Halaman utama
* List kendaraan
* Banner, rekomendasi, dll

---

### 📝 Register

```
features/register/
├─ hooks-register
├─ schema-register
└─ service-register
```

Digunakan untuk:

* Form pendaftaran user
* Validasi input register
* API register

---

### 🔐 Sign In

```
features/sign-in/
├─ components-sign-in
├─ hooks-sign-in
├─ models-sign-in
├─ schema-sign-in
├─ service-sign-in
└─ store-sign-in
```

Digunakan untuk:

* Autentikasi user
* Login form
* Penyimpanan auth state

---

### 🚗 Vehicle Detail

```
features/vehicle-detail/
├─ components-vehicle-detail
└─ hooks-vehicle-detail
```

Digunakan untuk:

* Detail kendaraan
* Informasi spesifikasi
* Interaksi user terhadap kendaraan

---

## 🔁 Reusable Layer

### `src/hooks`

Custom hooks global yang bisa digunakan lintas fitur.

Contoh:

* `useDebounce`
* `useAuth`

---

### `src/lib`

Abstraksi library & konfigurasi global.

Contoh:

* Axios instance
* Query Client
* Token handler

---

### `src/models`

Global type & interface yang dipakai lintas fitur.

---

### `src/layout`

Layout wrapper aplikasi.

Contoh:

* AuthLayout
* DashboardLayout

---

## 🧠 Prinsip Arsitektur

* ✅ **Separation of Concerns**
* ✅ **Scalable & Maintainable**
* ✅ **Low Coupling antar fitur**
* ✅ **Naming konsisten**

---

## 📏 Konvensi Penulisan

* Gunakan **TypeScript strict**
* Satu fitur **tidak boleh langsung mengakses store/service fitur lain**
* Reusable logic → pindahkan ke `common` atau `hooks`

---

## 🚀 Development Flow Singkat

1. Buat folder fitur baru di `features/`
2. Definisikan schema → models → service → hooks → components
3. Hubungkan ke routing & layout

---

## 📄 Penutup

Dokumentasi ini bersifat **living document**. Setiap perubahan arsitektur atau penambahan fitur baru **wajib** di-update di README ini agar konsistensi project tetap terjaga.

Happy coding 🚀
