import axios from 'axios';
import { useEffect, useRef, useState }from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './styles/chart.css'
const Char = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const chartRef = useRef(null);
    useEffect(() => {
        axios.get('https://crud-tienda-web.onrender.com/api/v1/empleado')
            .then(response => {
                console.log('API Response:', response.data); // Verifica los datos recibidos
                setEmployeeData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
                setLoading(false);
            });
    }, []);
    
    if (loading) {
        return <div>Cargando datos...</div>;
    }

    
  // Agrupar empleados por dirección y contar cuántos hay en cada grupo
  const directionCounts = employeeData.reduce((acc, emp) => {
    acc[emp.direccion] = (acc[emp.direccion] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(directionCounts);
  const dataValues = Object.values(directionCounts);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Cantidad de Empleados por Dirección',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };
  return (
    <div className='chart'>
       <Bar ref={chartRef} data={data} />
    </div>
  )
}

export default Char
