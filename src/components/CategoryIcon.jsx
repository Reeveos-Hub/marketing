import {
  LayoutDashboard, Calendar, ClipboardList, Link2, Scissors,
  Users, BookUser, FileText, ShoppingBag, CreditCard,
  Star, BarChart3, Megaphone, Bell, Globe,
  Settings, Trash2, LayoutGrid, Monitor
} from 'lucide-react'

const ICON_MAP = {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  Link2,
  Scissors,
  Users,
  BookUser,
  FileText,
  ShoppingBag,
  CreditCard,
  Star,
  BarChart3,
  Megaphone,
  Bell,
  Globe,
  Settings,
  Trash2,
  LayoutGrid,
  Monitor,
}

export default function CategoryIcon({ name, size = 24, color = '#C9A84C', strokeWidth = 1.8, ...props }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={strokeWidth} {...props} />
}
