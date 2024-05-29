import { FaShop, FaUsers } from "react-icons/fa6";
import useAuth from "../../../hooks/Auth/useAuth";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuCar } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import Loading from "../../../components/Loading";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie, } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data = [], isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin-stats')
            return data
        }
    })
    const { data: chartData = [], isLoading: chartDataLoading } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/order-stats')
            return data
        }
    })
    if (isLoading || chartDataLoading) return <Loading />

    // Custom bar chart shape
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // Custom pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const picChartData = chartData.map(item => {
        return { name: item.category, value: item.revenue, }
    })
    return (
        <div>
            <h1 className="px-2 text-xl md:text-3xl font-cinzel font-semibold">Hi, Welcome Back,  <span>{user && user?.displayName}</span>
            </h1>
            <div className="text-white flex flex-col md:flex-row justify-around items-center gap-5 md:gap-10 my-5 md:my-8">
                <div className=" p-5 md:p-8 md:h-[150px] md:w-[290px] bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex gap-5 justify-center items-center rounded-lg">
                    <FaShop className="md:size-12 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter">{data?.revenue}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Revenue</p>
                    </div>
                </div>
                <div className=" p-5 md:p-8 md:h-[150px] md:w-[290px] bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]  flex gap-5 justify-center items-center rounded-lg">
                    <FaUsers className="md:size-12 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter">{data?.users}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Customers</p>
                    </div>
                </div>
                <div className=" p-5 md:p-8 md:h-[150px] md:w-[290px] bg-gradient-to-r from-[#FE4880] to-[#FECDE9]  flex gap-5 justify-center items-center rounded-lg">
                    <MdOutlineProductionQuantityLimits className="md:size-12 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter">{data?.menuItems}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Products</p>
                    </div>
                </div>
                <div className=" p-5 md:p-8 md:h-[150px] md:w-[290px] bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]  flex gap-5 justify-center items-center rounded-lg">
                    <LuCar className="md:size-12 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter">{data?.orders}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Order</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                {/* Bar chart */}
                <div>
                    <BarChart
                        width={335}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="revenue" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                {/* Pie chart */}
                <div>
                    <PieChart width={320} height={400}>
                        <Pie
                            data={picChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {picChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;