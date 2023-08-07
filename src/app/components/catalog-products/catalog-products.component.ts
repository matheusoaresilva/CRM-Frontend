import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.css']
})
export class CatalogProductsComponent {

  cards = [
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/p/placa-de-video-gigabyte-nvidia-geforce-rtx-3060-windforce-oc-12gb-gddr6-dlss-ray-tracing-gv-n3060wf2oc-12gd_172983.png',
      category: 'Hardware',
      description: 'Placa de vídeo Gigabyte',
      price: 189.90
    },
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/p/upgrade1167_135823.jpg',
      category: 'Software',
      description: 'Licença de software de produtividade',
      price: 49.99
    },
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/p/headset-gamer-superframe-maestro-rgb-usb-drives-de-50mm-black_138089.jpg',
      category: 'Electrônicos',
      description: 'Fone de ouvido sem fio',
      price: 99.00
    },
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/p/mochila-divoom-see-more-com-display-de-led-em-pixel-art-preto_164102.png',
      category: 'Acessórios',
      description: 'Mochila para laptop',
      price: 39.95
    },
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/p/teclado-gamer-mecanico-t-dagger-bora-switch-brown-rgb-black-abnt2-t-tgk315-br_101589.png',
      category: 'Jogos',
      description: 'Teclado mecânico para jogos',
      price: 129.99
    },
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/p/smartwatch-superframe-smart-700-169-bluetooth-spo2-monitoramento-de-frequencia-cardiaca-music-control-compativel-com-alexa-black-sw-700-p_172521.jpg',
      category: 'Eletrônicos',
      description: 'Smartwatch fitness',
      price: 79.50
    },
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/g/ssd-kingston-a400-240gb-sa400s37240g-sata-iii-leitura-500mbs-gravacao-350mbs_37616.jpg',
      category: 'Hardware',
      description: 'SSD interno de 1TB',
      price: 179.00
    },
    {
      imgUrl: 'https://img.terabyteshop.com.br/produto/p/mouse-sem-fio-dr-office-1600-dpi-6-botoes-black-mdr-0101-b_172537.png',
      category: 'Acessórios',
      description: 'Mouse sem fio',
      price: 24.99
    },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/g/antivirus-norton-360-premium-10-usuarios-10-dispositivo-12-meses-75gb-21405479_104645.png',
    //   category: 'Software',
    //   description: 'Antivírus premium',
    //   price: 59.95
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/controle-sony-dualsense-ps5-sem-fio-white-3005767_160593.jpg',
    //   category: 'Jogos',
    //   description: 'Controle para videogame',
    //   price: 69.90
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/fonte-montech-beta-bronze-550w-80-plus-bronze-pfc-ativo_129070.png',
    //   category: 'Hardware',
    //   description: 'Fonte Montech',
    //   price: 19.95
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/camera-intelbras-multi-hd-1080p-lente-varifocal-ir-vhd-3240-z-g5_115316.png',
    //   category: 'Electrônicos',
    //   description: 'Câmera de segurança Wi-Fi',
    //   price: 89.99
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/monitor-gamer-superframe-precision-238-pol-flat-full-hd-1ms-280hz-100-srgb-freesync-hdmidp_149888.jpg',
    //   category: 'Hardware',
    //   description: 'Monitor de alta resolução',
    //   price: 249.00
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/controle-sony-dualsense-ps5-sem-fio-cosmic-red-3006453_153666.png',
    //   category: 'Jogos',
    //   description: 'Console de videogame',
    //   price: 299.00
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/water-cooler-gamemax-ice-chill-120-argb-120mm-intel-amd_102131.jpg',
    //   category: 'Hardware',
    //   description: 'Water cooler',
    //   price: 79.99
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/cadeira-gamer-ninja-hiryu-rosa-e-branco-suporta-ate-120kg_158395.jpg',
    //   category: 'Acessories',
    //   description: 'Cadeira gamer ninja hiryu',
    //   price: 149.90
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/carregador-para-controle-playstation-4-hyperx-chargeplay-duo-2-slots-hx-cpdu-c_124938.jpg',
    //   category: 'Acessórios',
    //   description: 'Carregador portátil',
    //   price: 29.99
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/roteador-wireless-asus-rt-ac67p-ac-1900-dual-band-5ghz-1299mbps-80211ac_149572.jpg',
    //   category: 'Hardware',
    //   description: 'Roteador Wi-Fi',
    //   price: 69.95
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/caixa-de-som-creative-t100-premium-hi-fi-20-bluetoothusb35mm-black-com-controle-remoto-51mf1690aa000_151359.jpg',
    //   category: 'Electrônicos',
    //   description: 'Caixa de som Bluetooth',
    //   price: 59.50
    // },
    // {
    //   imgUrl: 'https://img.terabyteshop.com.br/produto/p/processador-intel-core-i9-10900-280ghz-520ghz-turbo-10-geracao-10-cores-20-threads-lga-1200-bx8070110900_98706.jpg',
    //   category: 'Software',
    //   description: 'Processador intel core I9',
    //   price: 129.00
    // },
    
  ];
  
}
