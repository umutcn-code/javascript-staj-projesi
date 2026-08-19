# TaskFlow

TaskFlow, React ve LocalStorage kullanılarak hazırlanmış modern bir görev takip uygulamasıdır. Proje, staj veya eğitim teslimi için CRUD işlemlerini, routing yapısını ve responsive arayüzü gösterecek şekilde tasarlanmıştır.

## Kullanılan Teknolojiler

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- LocalStorage

## Özellikler

- Dashboard istatistikleri
- Görev ekleme
- Görev listeleme
- Görev düzenleme
- Görev silme
- Durum değiştirme
- Arama
- Filtreleme
- LocalStorage ile kalıcı veri
- Boş liste ve hata durumları
- Responsive tasarım

## Kurulum

```bash
npm install
```

## Çalıştırma

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Ekran Görüntüsü

![TaskFlow Ekran Görüntüsü](docs/screenshot.png)

## GitHub Linki

https://github.com/umutcn-code/javascript-staj-projesi

## Live Demo Linki

https://enchanting-faloodeh-4e7139.netlify.app

## GitHub'a Yükleme Adımları

```bash
git init
git add .
git commit -m "Initial TaskFlow project"
git branch -M main
git remote add origin https://github.com/umutcn-code/javascript-staj-projesi.git
git push -u origin main
```

## Netlify Deployment

1. Netlify hesabına gir.
2. Add new site > Import an existing project seç.
3. GitHub repository bağlantısını seç.
4. Build command alanına `npm run build` yaz.
5. Publish directory alanına `dist` yaz.
6. Deploy butonuna bas.

Deployment sonrası ana sayfa, görev listesi, yeni görev ekleme, düzenleme, silme ve sayfa yenileme sonrası LocalStorage kontrol edilmelidir.

## Teslim Kontrol Listesi

- [X] React projesi çalışıyor
- [X] CSS framework kullanılıyor
- [X] Components klasörü var
- [X] Pages klasörü var
- [X] Interfaces klasörü var
- [X] Ekleme işlemi çalışıyor
- [X] Listeleme işlemi çalışıyor
- [X] Güncelleme işlemi çalışıyor
- [X] Silme işlemi çalışıyor
- [X] LocalStorage çalışıyor
- [X] Responsive tasarım mevcut
- [X] GitHub repository public
- [X] README.md mevcut
- [X] En az bir ekran görüntüsü hazır
- [X] Netlify deployment çalışıyor
- [X] Live demo linki çalışıyor
- [X] npm run build hatasız çalışıyor
