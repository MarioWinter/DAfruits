import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `<footer>
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="1440" height="127" viewBox="0 0 1440 127" fill="none">
      <path d="M0 127H1440V24.9102C1257.5 7.95 981.576 -0.999994 719.5 -0.999994C457.835 -0.999994 210.28 4.9 0 24.7883V127Z" fill="#09212A"/>
  </svg>
  <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="135" height="32" viewBox="0 0 135 32" fill="none">
          <path d="M53.3723 13.441V11.3672C53.9995 11.3672 54.5884 11.252 55.1388 11.0216C55.6892 10.7784 56.1693 10.4456 56.5789 10.0231C56.9885 9.6007 57.3085 9.10786 57.539 8.54462C57.7694 7.98138 57.8846 7.37334 57.8846 6.72049C57.8846 6.06764 57.7694 5.4596 57.539 4.89636C57.3085 4.33312 56.9885 3.84028 56.5789 3.41785C56.1693 2.99542 55.6892 2.66899 55.1388 2.43858C54.5884 2.19536 53.9995 2.07375 53.3723 2.07375V0C54.6908 0 55.8556 0.288021 56.8669 0.864063C57.891 1.4273 58.691 2.21456 59.2671 3.22584C59.8559 4.23711 60.1504 5.40199 60.1504 6.72049C60.1504 8.02618 59.8559 9.18467 59.2671 10.1959C58.691 11.2072 57.891 12.0009 56.8669 12.5769C55.8556 13.153 54.6908 13.441 53.3723 13.441ZM50.5881 13.441V11.3672H53.3723V13.441H50.5881ZM49.148 13.441V0H51.3753V13.441H49.148ZM50.5881 2.07375V0H53.3723V2.07375H50.5881Z" fill="white"/>
          <path d="M66.1088 13.6714C65.1743 13.6714 64.3423 13.4602 63.6126 13.0377C62.883 12.6025 62.3133 12.0073 61.9037 11.252C61.4941 10.4968 61.2892 9.6263 61.2892 8.64063C61.2892 7.65496 61.5005 6.78449 61.9229 6.02924C62.3453 5.27398 62.9214 4.68514 63.651 4.26271C64.3807 3.82748 65.2255 3.60986 66.1856 3.60986C67.0305 3.60986 67.7985 3.83388 68.4898 4.28191C69.181 4.71714 69.7251 5.35079 70.1219 6.18285C70.5315 7.01491 70.7363 8.00698 70.7363 9.15907H68.5666C68.5794 8.32701 68.4834 7.64216 68.2785 7.10452C68.0865 6.56688 67.8049 6.17005 67.4337 5.91403C67.0625 5.64521 66.6208 5.5108 66.1088 5.5108C65.5711 5.5108 65.1103 5.63241 64.7263 5.87563C64.3551 6.11885 64.067 6.47727 63.8622 6.95091C63.6574 7.41174 63.555 7.99418 63.555 8.69823C63.555 9.32548 63.6766 9.86312 63.9198 10.3112C64.163 10.7592 64.4895 11.1048 64.8991 11.348C65.3215 11.5784 65.7888 11.6937 66.3008 11.6937C66.864 11.6937 67.3313 11.5656 67.7025 11.3096C68.0737 11.0408 68.3618 10.7016 68.5666 10.2919L70.5443 11.1368C70.2755 11.6488 69.9363 12.0969 69.5266 12.4809C69.117 12.8649 68.6242 13.1594 68.0481 13.3642C67.4721 13.569 66.8256 13.6714 66.1088 13.6714ZM62.6909 9.15907L62.7101 7.45014H69.6226V9.15907H62.6909Z" fill="white"/>
          <path d="M74.8448 13.441L78.5891 3.84028H80.8165L76.861 13.441H74.8448ZM74.6912 13.441L70.7165 3.84028H72.9247L76.6882 13.441H74.6912Z" fill="white"/>
          <path d="M85.911 13.6714C84.9765 13.6714 84.1444 13.4602 83.4148 13.0377C82.6851 12.6025 82.1155 12.0073 81.7059 11.252C81.2962 10.4968 81.0914 9.6263 81.0914 8.64063C81.0914 7.65496 81.3026 6.78449 81.7251 6.02924C82.1475 5.27398 82.7235 4.68514 83.4532 4.26271C84.1828 3.82748 85.0277 3.60986 85.9878 3.60986C86.8326 3.60986 87.6007 3.83388 88.292 4.28191C88.9832 4.71714 89.5272 5.35079 89.9241 6.18285C90.3337 7.01491 90.5385 8.00698 90.5385 9.15907H88.3688C88.3816 8.32701 88.2855 7.64216 88.0807 7.10452C87.8887 6.56688 87.6071 6.17005 87.2359 5.91403C86.8646 5.64521 86.423 5.5108 85.911 5.5108C85.3733 5.5108 84.9125 5.63241 84.5285 5.87563C84.1572 6.11885 83.8692 6.47727 83.6644 6.95091C83.4596 7.41174 83.3572 7.99418 83.3572 8.69823C83.3572 9.32548 83.4788 9.86312 83.722 10.3112C83.9652 10.7592 84.2917 11.1048 84.7013 11.348C85.1237 11.5784 85.591 11.6937 86.103 11.6937C86.6662 11.6937 87.1335 11.5656 87.5047 11.3096C87.8759 11.0408 88.1639 10.7016 88.3688 10.2919L90.3465 11.1368C90.0777 11.6488 89.7385 12.0969 89.3288 12.4809C88.9192 12.8649 88.4264 13.1594 87.8503 13.3642C87.2743 13.569 86.6278 13.6714 85.911 13.6714ZM82.4931 9.15907L82.5123 7.45014H89.4248V9.15907H82.4931Z" fill="white"/>
          <path d="M91.9119 13.441L91.9311 0H94.0816L94.0624 13.441H91.9119Z" fill="white"/>
          <path d="M100.635 13.6714C99.6623 13.6714 98.7982 13.4602 98.043 13.0377C97.3005 12.6025 96.7181 12.0073 96.2956 11.252C95.8732 10.4968 95.662 9.6263 95.662 8.64063C95.662 7.65496 95.8668 6.78449 96.2764 6.02924C96.6989 5.27398 97.2813 4.68514 98.0238 4.26271C98.779 3.82748 99.6367 3.60986 100.597 3.60986C101.57 3.60986 102.427 3.82748 103.17 4.26271C103.912 4.68514 104.495 5.27398 104.917 6.02924C105.339 6.78449 105.551 7.65496 105.551 8.64063C105.551 9.6263 105.339 10.4968 104.917 11.252C104.495 12.0073 103.912 12.6025 103.17 13.0377C102.44 13.4602 101.595 13.6714 100.635 13.6714ZM100.635 11.5976C101.147 11.5976 101.595 11.476 101.979 11.2328C102.376 10.9768 102.683 10.6248 102.901 10.1767C103.131 9.72871 103.247 9.21667 103.247 8.64063C103.247 8.06459 103.131 7.55255 102.901 7.10452C102.683 6.65649 102.37 6.31086 101.96 6.06764C101.563 5.81162 101.109 5.68361 100.597 5.68361C100.085 5.68361 99.6303 5.81162 99.2334 6.06764C98.8366 6.31086 98.523 6.65649 98.2926 7.10452C98.075 7.55255 97.9662 8.06459 97.9662 8.64063C97.9662 9.21667 98.075 9.72871 98.2926 10.1767C98.523 10.6248 98.8366 10.9768 99.2334 11.2328C99.6431 11.476 100.11 11.5976 100.635 11.5976Z" fill="white"/>
          <path d="M107.216 17.2813V3.84028H109.232L109.367 5.60681V17.2813H107.216ZM112.4 13.6714C111.594 13.6714 110.896 13.4666 110.307 13.0569C109.731 12.6345 109.29 12.0457 108.983 11.2904C108.675 10.5352 108.522 9.6519 108.522 8.64063C108.522 7.61655 108.675 6.73329 108.983 5.99084C109.29 5.23558 109.731 4.65314 110.307 4.24351C110.896 3.82108 111.594 3.60986 112.4 3.60986C113.271 3.60986 114.026 3.82108 114.666 4.24351C115.319 4.65314 115.825 5.23558 116.183 5.99084C116.554 6.73329 116.74 7.61655 116.74 8.64063C116.74 9.6519 116.554 10.5352 116.183 11.2904C115.825 12.0457 115.319 12.6345 114.666 13.0569C114.026 13.4666 113.271 13.6714 112.4 13.6714ZM111.863 11.7129C112.375 11.7129 112.829 11.5848 113.226 11.3288C113.623 11.06 113.936 10.6952 114.167 10.2343C114.41 9.77351 114.532 9.24227 114.532 8.64063C114.532 8.03899 114.417 7.50775 114.186 7.04691C113.968 6.58608 113.661 6.22765 113.264 5.97163C112.868 5.71562 112.407 5.58761 111.882 5.58761C111.395 5.58761 110.96 5.71562 110.576 5.97163C110.192 6.22765 109.891 6.58608 109.674 7.04691C109.469 7.50775 109.367 8.03899 109.367 8.64063C109.367 9.24227 109.469 9.77351 109.674 10.2343C109.891 10.6952 110.186 11.06 110.557 11.3288C110.941 11.5848 111.376 11.7129 111.863 11.7129Z" fill="white"/>
          <path d="M122.59 13.6714C121.656 13.6714 120.824 13.4602 120.094 13.0377C119.364 12.6025 118.795 12.0073 118.385 11.252C117.975 10.4968 117.771 9.6263 117.771 8.64063C117.771 7.65496 117.982 6.78449 118.404 6.02924C118.827 5.27398 119.403 4.68514 120.132 4.26271C120.862 3.82748 121.707 3.60986 122.667 3.60986C123.512 3.60986 124.28 3.83388 124.971 4.28191C125.662 4.71714 126.206 5.35079 126.603 6.18285C127.013 7.01491 127.218 8.00698 127.218 9.15907H125.048C125.061 8.32701 124.965 7.64216 124.76 7.10452C124.568 6.56688 124.286 6.17005 123.915 5.91403C123.544 5.64521 123.102 5.5108 122.59 5.5108C122.053 5.5108 121.592 5.63241 121.208 5.87563C120.836 6.11885 120.548 6.47727 120.344 6.95091C120.139 7.41174 120.036 7.99418 120.036 8.69823C120.036 9.32548 120.158 9.86312 120.401 10.3112C120.644 10.7592 120.971 11.1048 121.38 11.348C121.803 11.5784 122.27 11.6937 122.782 11.6937C123.345 11.6937 123.813 11.5656 124.184 11.3096C124.555 11.0408 124.843 10.7016 125.048 10.2919L127.026 11.1368C126.757 11.6488 126.418 12.0969 126.008 12.4809C125.598 12.8649 125.106 13.1594 124.529 13.3642C123.953 13.569 123.307 13.6714 122.59 13.6714ZM119.172 9.15907L119.191 7.45014H126.104V9.15907H119.172Z" fill="white"/>
          <path d="M130.012 8.33341C130.012 7.29653 130.21 6.44527 130.607 5.77962C131.004 5.11397 131.516 4.62114 132.143 4.30111C132.783 3.96829 133.449 3.80188 134.14 3.80188V5.85643C133.551 5.85643 132.995 5.93963 132.47 6.10604C131.958 6.25966 131.542 6.51567 131.222 6.8741C130.902 7.23253 130.742 7.70616 130.742 8.295L130.012 8.33341ZM128.591 13.441V3.84028H130.742V13.441H128.591Z" fill="white"/>
          <path d="M58.4606 31.7696L53.2187 18.3286H55.446L60.8224 31.7696H58.4606ZM47.7271 31.7696L53.0842 18.3286H55.3308L50.0888 31.7696H47.7271ZM50.2424 28.4669V26.4892H58.2878V28.4669H50.2424Z" fill="white"/>
          <path d="M63.8412 29.0814L62.5355 27.6029L67.5279 22.1689H70.1201L63.8412 29.0814ZM61.7867 31.7696V18.3286H63.9372V31.7696H61.7867ZM67.8927 31.7696L64.5133 26.7964L65.915 25.2987L70.4465 31.7696H67.8927Z" fill="white"/>
          <path d="M76.8611 31.7696L76.7651 26.8348C76.7651 26.182 76.6947 25.6379 76.5539 25.2027C76.4131 24.7675 76.1955 24.4346 75.901 24.2042C75.6066 23.9738 75.2098 23.8586 74.7106 23.8586C74.2625 23.8586 73.8657 23.9546 73.5201 24.1466C73.1745 24.3386 72.8864 24.6331 72.656 25.0299L70.7359 24.3578C70.9535 23.9354 71.2351 23.5386 71.5807 23.1674C71.9264 22.7961 72.3616 22.5017 72.8864 22.2841C73.4113 22.0537 74.0385 21.9385 74.7682 21.9385C75.6898 21.9385 76.4579 22.1113 77.0723 22.4569C77.6996 22.8025 78.1668 23.3146 78.474 23.993C78.7813 24.6715 78.9349 25.5099 78.9349 26.5084V31.7696H76.8611ZM74.1345 32C72.9952 32 72.1056 31.744 71.4655 31.2319C70.8383 30.7199 70.5247 29.9967 70.5247 29.0622C70.5247 28.0637 70.8575 27.3021 71.5231 26.7772C72.2016 26.2524 73.1425 25.99 74.3457 25.99H77.3604L77.3796 27.6413H75.0178C74.1601 27.6413 73.5585 27.7629 73.2129 28.0061C72.88 28.2365 72.7136 28.5694 72.7136 29.0046C72.7136 29.3758 72.8608 29.6702 73.1553 29.8878C73.4625 30.0927 73.8849 30.1951 74.4225 30.1951C74.8962 30.1951 75.3058 30.0863 75.6514 29.8686C76.0099 29.6382 76.2851 29.3438 76.4771 28.9854C76.6691 28.6142 76.7651 28.2173 76.7651 27.7949H77.5716C77.5716 29.1006 77.29 30.1311 76.7267 30.8863C76.1763 31.6288 75.3122 32 74.1345 32Z" fill="white"/>
          <path d="M87.6768 31.7696L87.5807 29.9839V18.3286H89.7121V31.7696H87.6768ZM84.5469 32C83.6765 32 82.9148 31.7952 82.262 31.3856C81.6219 30.9631 81.1163 30.3743 80.745 29.619C80.3866 28.8638 80.2074 27.9805 80.2074 26.9692C80.2074 25.9452 80.3866 25.0619 80.745 24.3194C81.1163 23.5642 81.6219 22.9817 82.262 22.5721C82.9148 22.1497 83.6765 21.9385 84.5469 21.9385C85.3534 21.9385 86.0446 22.1497 86.6207 22.5721C87.2095 22.9817 87.6576 23.5642 87.9648 24.3194C88.272 25.0619 88.4256 25.9452 88.4256 26.9692C88.4256 27.9805 88.272 28.8638 87.9648 29.619C87.6576 30.3743 87.2095 30.9631 86.6207 31.3856C86.0446 31.7952 85.3534 32 84.5469 32ZM85.0846 30.0415C85.571 30.0415 85.9998 29.9134 86.3711 29.6574C86.7551 29.3886 87.0495 29.0238 87.2543 28.563C87.4719 28.1021 87.5807 27.5709 87.5807 26.9692C87.5807 26.3676 87.4719 25.8364 87.2543 25.3755C87.0495 24.9147 86.7551 24.5563 86.3711 24.3002C85.9998 24.0442 85.5646 23.9162 85.0654 23.9162C84.5533 23.9162 84.0989 24.0442 83.7021 24.3002C83.3052 24.5563 82.9916 24.9147 82.7612 25.3755C82.5436 25.8364 82.4284 26.3676 82.4156 26.9692C82.4284 27.5709 82.5436 28.1021 82.7612 28.563C82.9916 29.0238 83.3052 29.3886 83.7021 29.6574C84.1117 29.9134 84.5725 30.0415 85.0846 30.0415Z" fill="white"/>
          <path d="M96.1027 32C95.1683 32 94.3362 31.7888 93.6065 31.3664C92.8769 30.9311 92.3072 30.3359 91.8976 29.5806C91.488 28.8254 91.2832 27.9549 91.2832 26.9692C91.2832 25.9836 91.4944 25.1131 91.9168 24.3578C92.3392 23.6026 92.9153 23.0137 93.6449 22.5913C94.3746 22.1561 95.2195 21.9385 96.1795 21.9385C97.0244 21.9385 97.7924 22.1625 98.4837 22.6105C99.1749 23.0457 99.719 23.6794 100.116 24.5115C100.525 25.3435 100.73 26.3356 100.73 27.4877H98.5605C98.5733 26.6556 98.4773 25.9708 98.2725 25.4331C98.0805 24.8955 97.7988 24.4987 97.4276 24.2426C97.0564 23.9738 96.6148 23.8394 96.1027 23.8394C95.5651 23.8394 95.1042 23.961 94.7202 24.2042C94.349 24.4474 94.061 24.8059 93.8562 25.2795C93.6513 25.7403 93.5489 26.3228 93.5489 27.0268C93.5489 27.6541 93.6705 28.1917 93.9138 28.6398C94.157 29.0878 94.4834 29.4334 94.893 29.6766C95.3155 29.907 95.7827 30.0223 96.2947 30.0223C96.858 30.0223 97.3252 29.8942 97.6964 29.6382C98.0677 29.3694 98.3557 29.0302 98.5605 28.6206L100.538 29.4654C100.269 29.9775 99.9302 30.4255 99.5206 30.8095C99.1109 31.1935 98.6181 31.488 98.0421 31.6928C97.466 31.8976 96.8196 32 96.1027 32ZM92.6849 27.4877L92.7041 25.7787H99.6166V27.4877H92.6849Z" fill="white"/>
          <path d="M102.104 31.7696V22.1689H104.12L104.254 23.9354V31.7696H102.104ZM108.613 31.7696V26.854L110.763 26.278V31.7696H108.613ZM115.141 31.7696V26.854L117.273 26.278V31.7696H115.141ZM108.613 26.854C108.613 26.086 108.523 25.4971 108.344 25.0875C108.178 24.6651 107.934 24.3706 107.614 24.2042C107.307 24.0378 106.942 23.9546 106.52 23.9546C105.803 23.9418 105.246 24.1786 104.849 24.6651C104.453 25.1515 104.254 25.8492 104.254 26.758H103.448C103.448 25.7467 103.595 24.8827 103.889 24.1658C104.184 23.4362 104.606 22.8857 105.157 22.5145C105.707 22.1305 106.36 21.9385 107.115 21.9385C108.28 21.9385 109.176 22.2969 109.803 23.0137C110.443 23.7178 110.763 24.8059 110.763 26.278L108.613 26.854ZM115.141 26.854C115.141 26.086 115.052 25.4971 114.873 25.0875C114.693 24.6651 114.444 24.3706 114.124 24.2042C113.816 24.0378 113.458 23.9546 113.048 23.9546C112.319 23.9418 111.756 24.1786 111.359 24.6651C110.962 25.1515 110.763 25.8492 110.763 26.758H109.957C109.957 25.7467 110.104 24.8827 110.399 24.1658C110.693 23.4362 111.115 22.8857 111.666 22.5145C112.216 22.1305 112.869 21.9385 113.624 21.9385C114.789 21.9385 115.692 22.2969 116.332 23.0137C116.972 23.7178 117.286 24.8059 117.273 26.278L115.141 26.854Z" fill="white"/>
          <path d="M119.218 31.7696L119.237 22.1689H121.368L121.349 31.7696H119.218ZM120.293 20.3448C119.947 20.3448 119.647 20.2231 119.391 19.9799C119.147 19.7239 119.026 19.4231 119.026 19.0775C119.026 18.7318 119.147 18.4374 119.391 18.1942C119.647 17.951 119.947 17.8294 120.293 17.8294C120.639 17.8294 120.933 17.951 121.176 18.1942C121.432 18.4374 121.56 18.7318 121.56 19.0775C121.56 19.4231 121.432 19.7239 121.176 19.9799C120.933 20.2231 120.639 20.3448 120.293 20.3448Z" fill="white"/>
          <path d="M127.897 32C126.962 32 126.13 31.7888 125.401 31.3664C124.671 30.9311 124.101 30.3359 123.692 29.5806C123.282 28.8254 123.077 27.9549 123.077 26.9692C123.077 25.9836 123.288 25.1131 123.711 24.3578C124.133 23.6026 124.709 23.0137 125.439 22.5913C126.169 22.1561 127.014 21.9385 127.974 21.9385C128.818 21.9385 129.587 22.1625 130.278 22.6105C130.969 23.0457 131.513 23.6794 131.91 24.5115C132.32 25.3435 132.524 26.3356 132.524 27.4877H130.355C130.367 26.6556 130.271 25.9708 130.067 25.4331C129.875 24.8955 129.593 24.4987 129.222 24.2426C128.85 23.9738 128.409 23.8394 127.897 23.8394C127.359 23.8394 126.898 23.961 126.514 24.2042C126.143 24.4474 125.855 24.8059 125.65 25.2795C125.445 25.7403 125.343 26.3228 125.343 27.0268C125.343 27.6541 125.465 28.1917 125.708 28.6398C125.951 29.0878 126.277 29.4334 126.687 29.6766C127.11 29.907 127.577 30.0223 128.089 30.0223C128.652 30.0223 129.119 29.8942 129.49 29.6382C129.862 29.3694 130.15 29.0302 130.355 28.6206L132.332 29.4654C132.063 29.9775 131.724 30.4255 131.315 30.8095C130.905 31.1935 130.412 31.488 129.836 31.6928C129.26 31.8976 128.614 32 127.897 32ZM124.479 27.4877L124.498 25.7787H131.411V27.4877H124.479Z" fill="white"/>
          <path d="M20.7865 20.4497C20.7948 20.5048 20.8288 20.5525 20.8781 20.5783C20.9274 20.6041 20.9861 20.6049 21.036 20.5804L28.3133 17.0079C28.3595 16.9853 28.3933 16.9434 28.4058 16.8935C28.4976 16.525 28.5274 16.1596 28.5274 15.7655C28.5274 15.3298 28.467 14.9325 28.4086 14.5811C28.3993 14.5253 28.3636 14.4775 28.3127 14.4527L21.0354 10.9153C20.9859 10.8913 20.9279 10.892 20.879 10.9172C20.83 10.9425 20.7959 10.9894 20.7869 11.0437L20.7858 11.0501C20.7581 11.2167 20.7279 11.3987 20.7264 11.5833C20.6972 11.7696 20.6972 11.9857 20.6972 12.184V12.1931C20.6972 12.2672 20.7043 12.3484 20.711 12.4242L20.7124 12.4403C20.7197 12.524 20.7263 12.6045 20.7263 12.6834C20.7263 12.693 20.7271 12.7026 20.7287 12.712C20.7414 12.7883 20.7481 12.8653 20.7552 12.9464L20.7561 12.9569C20.7632 13.0384 20.7712 13.1275 20.7882 13.2093C20.7996 13.2642 20.8367 13.3103 20.888 13.3332L26.2721 15.7337L20.8856 18.2339C20.8355 18.2572 20.7994 18.3027 20.7882 18.3568C20.7589 18.4976 20.7279 18.6805 20.7264 18.8682C20.6972 19.0528 20.6972 19.236 20.6972 19.435V19.443C20.6972 19.735 20.7275 20.0596 20.7865 20.4497Z" fill="#FD5B4F"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3716 7.17716C18.4209 7.20296 18.4549 7.25071 18.4632 7.30573C18.5222 7.69592 18.5525 8.02048 18.5525 8.31248V8.32056C18.5525 8.51947 18.5525 8.70271 18.5233 8.88727C18.5218 9.07496 18.4908 9.25783 18.4615 9.3987C18.4503 9.45274 18.4142 9.49828 18.3641 9.52152L12.9776 12.0218L18.3617 14.4223C18.413 14.4451 18.4501 14.4913 18.4615 14.5462C18.4785 14.628 18.4865 14.7171 18.4936 14.7985L18.4945 14.809C18.5016 14.8901 18.5084 14.9671 18.521 15.0434C18.5226 15.0529 18.5234 15.0625 18.5234 15.072C18.5234 15.151 18.53 15.2315 18.5373 15.3151L18.5387 15.3312C18.5454 15.407 18.5525 15.4882 18.5525 15.5624V15.5715C18.5525 15.7699 18.5525 15.9859 18.5233 16.1721C18.5218 16.3568 18.4916 16.5388 18.4639 16.7052L18.4628 16.7118C18.4538 16.7661 18.4196 16.813 18.3707 16.8382C18.3218 16.8635 18.2638 16.8642 18.2143 16.8401L10.937 13.3027C10.8861 13.278 10.8504 13.2302 10.8411 13.1744C10.7827 12.823 10.7223 12.4256 10.7223 11.99C10.7223 11.5959 10.7521 11.2304 10.8439 10.862C10.8564 10.8121 10.8902 10.7702 10.9364 10.7475L18.2137 7.17511C18.2636 7.15059 18.3223 7.15135 18.3716 7.17716Z" fill="#FD5B4F"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.4622 0.785889H4.7873C2.61817 0.785889 0.859741 2.54432 0.859741 4.71345V23.042C0.859741 25.2112 2.61817 26.9696 4.7873 26.9696H34.4622C36.6313 26.9696 38.3897 25.2112 38.3897 23.042V4.71345C38.3897 2.54432 36.6313 0.785889 34.4622 0.785889ZM3.04172 4.71345C3.04172 3.74939 3.82324 2.96787 4.7873 2.96787H34.4622C35.4262 2.96787 36.2078 3.74939 36.2078 4.71345V23.042C36.2078 24.0061 35.4262 24.7876 34.4622 24.7876H4.7873C3.82324 24.7876 3.04172 24.0061 3.04172 23.042V4.71345Z" fill="#FD5B4F"/>
          <path d="M5.0055 29.1516C4.40296 29.1516 3.91451 29.64 3.91451 30.2426C3.91451 30.8451 4.40296 31.3336 5.0055 31.3336H34.244C34.8465 31.3336 35.335 30.8451 35.335 30.2426C35.335 29.64 34.8465 29.1516 34.244 29.1516H5.0055Z" fill="#FD5B4F"/>
          </svg>
          <p>&copy; 2023 Developer Akademie GmbH</p>
  </div>
</footer>`,
  styles: [`
    footer {
    position: relative;
    height: 128px;
    width: 100%;
    background-color: #06171E;
    >svg {
        height: 128px;
        width: 100%;
      }
    >div {
        position: absolute;
        flex-direction: column;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        >p {
            color: #627B84;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
        }
      }
    }
  `]
})
export class FooterComponent {

}
