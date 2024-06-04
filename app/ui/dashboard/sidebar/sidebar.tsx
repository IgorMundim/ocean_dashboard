import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdOutlineLiquor,
    MdOutlineAddCircle,
    MdCancel,
    MdGroupWork,
    MdLogout,
  } from "react-icons/md";
import styles from "./sidebar.module.css"
import { IMenuItem } from "@/app/types/IMenuItem";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
    // {
    //   title: "Pages",
    //   list: [
    //     {
    //       title: "Dashboard",
    //       path: "/dashboard",
    //       icon: <MdDashboard />,
    //     },
    //     {
    //       title: "Users",
    //       path: "/dashboard/users",
    //       icon: <MdSupervisedUserCircle />,
    //     },
    //     {
    //       title: "Products",
    //       path: "/dashboard/products",
    //       icon: <MdShoppingBag />,
    //     },
    //     {
    //       title: "Transactions",
    //       path: "/dashboard/transactions",
    //       icon: <MdAttachMoney />,
    //     },
    //   ],
    // },
    {
      title: "Pedido",
      list: [
        {
          title: "Meus Pedidos",
          path: "/dashboard/orders",
          icon: <MdDashboard />,
        },
        {
          title: "Cancelados",
          path: "/dashboard/cancel",
          icon: <MdCancel />,
        }
      ],
    },
    {
      title: "Produto",
      list: [
        {
          title: "Flow",
          path: "/dashboard/flow",
          icon: <MdOutlineLiquor />,
        },
        {
          title: "Novo Produto",
          path: "/dashboard/newproduct",
          icon: <MdOutlineLiquor />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdOutlineAddCircle />,
        }
      ],
    },
    
    // {
    //   title: "Analytic",
    //   list: [
    //     {
    //       title: "Revenue",
    //       path: "/dashboard/revenue",
    //       icon: <MdWork />,
    //     },
    //     {
    //       title: "Reports",
    //       path: "/dashboard/reports",
    //       icon: <MdAnalytics />,
    //     },
    //     {
    //       title: "Teams",
    //       path: "/dashboard/teams",
    //       icon: <MdPeople />,
    //     },
    //   ],
    // },
        {
      title: "Stream",
      list: [
        {
          title: "Novo Stream",
          path: "/dashboard/addstream",
          icon: <MdOutlineAddCircle />,
        },
        {
          title: "Streams",
          path: "/dashboard/streams",
          icon: <MdGroupWork />,
        },
      ],
    },
    {
      title: "Loja",
      list: [
        {
          title: "Cronograma",
          path: "/dashboard/schedule",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Envio",
          path: "/dashboard/delivery",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Endereço",
          path: "/dashboard/address",
          icon: <MdOutlineSettings />,
        },
      ],
    },
    {
      title: "Conta",
      list: [
        {
          title: "Pagamento",
          path: "/dashboard/payment",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Configurações",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Ajuda",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
        
      ],
    },
  ];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.webp" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Alexa Joe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((value: IMenuItem) => (
                    <li key={value.title}>
                        <span className={styles.category}>{value.title}</span>
                        { value.list.map((item: {title: string; path: string; icon: JSX.Element;}) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar