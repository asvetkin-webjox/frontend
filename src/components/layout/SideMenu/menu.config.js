// title - заголовок меню
// content - массив пунктов меню, в каждом:
//   header - если меню должно быть вложенным, верхний уровень
//   items - список подпунктов
// объект пункта меню -
//   id, titel, href, icon

import { ErrorMessageIcon } from 'components/UI/Icons/ErrorMessageIcon';
import { InvestorIcon } from 'components/UI/Icons/InvestorIcon';
import { ChartIcon } from 'components/UI/Icons/ChartIcon';
import { SettingsIcon } from 'components/UI/Icons/SettingsIcon';
import { WalletIcon } from 'components/UI/Icons/WalletIcon';
import { SupportIcon } from 'components/UI/Icons/SupportIcon';
import { BaseIcon } from 'components/UI/Icons/BaseIcon';
import { AnomaliesBaseIcon } from 'components/UI/Icons/AnomaliesBaseIcon';
import { UpChartIcon } from 'components/UI/Icons/UpChartIcon';
import { DownChartIcon } from 'components/UI/Icons/DownChartIcon';
import { FavoritesIcon } from 'components/UI/Icons/FavoritesIcon';

export const ACCOUNT_MENU = {
  title: 'Основное меню',
  content: [
    {
      id: 1,
      header: 'Профиль',
      icon: <InvestorIcon />,
      items: [
        {
          id: 11,
          title: 'Настройка аккаунта',
          href: '#',
          icon: <SettingsIcon />,
        },
        {
          id: 12,
          title: 'Лицензии и транзакции',
          href: '#',
          icon: <WalletIcon />,
        },
        { id: 13, title: 'Центр поддержки', href: '#', icon: <SupportIcon /> },
      ],
    },
    {
      id: 2,
      header: 'Анализ рынка',
      icon: <ChartIcon />,
      items: [
        { id: 21, title: 'База ниш', href: '#', icon: <BaseIcon /> },
        {
          id: 22,
          title: 'База аномалий',
          href: '#',
          icon: <AnomaliesBaseIcon />,
        },
        { id: 23, title: 'Тренды', href: '#', icon: <UpChartIcon /> },
        { id: 24, title: 'Падения рынка', href: '#', icon: <DownChartIcon /> },
        {
          id: 25,
          title: 'Сохраненные ниши',
          href: '#',
          icon: <FavoritesIcon />,
        },
      ],
    },
    {
      id: 3,
      title: 'Сообщить об ошибке',
      href: '#',
      icon: <ErrorMessageIcon />,
    },
  ],
};

export const ADMIN_MENU = {};
