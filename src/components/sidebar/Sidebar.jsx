import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';
import { MdContactMail } from 'react-icons/md';
import { GrUserManager, GrProjects } from 'react-icons/gr';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div class="half-circle"></div>
      <div className="profile">
        <Image
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA/EAACAQMDAQYDBgQEBAcAAAABAgMABBEFEiExBhMiQVFhFHGBByMyQpGhUrHB0RVi4fAkMzRyJkNTgoOS8f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAICAgIBBQADAAAAAAAAAAABAhEDIRIxQQQTIjJRFGFx/9oADAMBAAIRAxEAPwChys+2NGDBQMpn0P8ArU0ER8W4NnHhxR8On/DiSWbu2TOwbeRkYz9RmvJWh2RGBpTKyYk3KACf8uK57OtIHZU3MFZSCf8AeKJtIyDtjfDnPIB5x0ry3hJUMVBz+bP7UfaQBGAIOPzDHK/I/wB6A6QW+o3dxad23dFFwrOxwSSOOPpQEFqsxAkIjJQuFYbt+OmOR1o4RFXxDGJVQ4BZc5PuemRmmNlad0Vj3kZG3BYjr6456mhVdDVfYqEKIqqpy3C4+XlRcMUhBhjjBXnBfBAJ4Plz06+VOBYxR2LSXpCCNd3i4yuPPj9BUL6vo2kzlZS43opgcjCS5HQE8dMUVFsDlFC+K1djyAVGWDMxA9eKO+A2xKTsZ5MtjeCRx588UAvaiG6vjDbLFZXKPmMSRsGJ9uT+2flWNrzQjF/aRlMbu+gOQVzySeeKzgzLLENuosSfdbli2YwfL19B1zUiWh7tztC7/Fv3devT9814b/TnmhuFkYo5DbWIwvXHPPHz61ON6M4YsY+8DblHI9OnSlpoommRfDlo0lkKmLfy2QwGfbr5VFdWckVujNhQ/Gf4PPp1xTa4CSyoN7MwyxDH1GTWjO8YSeWWKfcR3eG8SfT6UNhFLI1xLJMwDnjcRxn39uKFNs7SMYBIJASCRzx86frbqodsOI1yWIGQD/Y1pLDKoSdJGUMNp8W0FRjHHyrWZoVtYOvcOVkkw207iAuOOK0+EWMSX0DYXvGTK8gZyOeKf316hh2pENwUeAqQCD8+vX96TlmklkRJjCT4WQKRuGeeOQKKeha2KbxI0iWRR97nr6+9T9ntLt9bvGj1C6NvGqEh+MseOOf1o+9sWntRNHbPtDhRIzDBI6j9KCisjLFGkZLSy5OxecUYvyLJCLUrJYbiSKOTvVVyoccBucDH7GoRaLgeKEexkFXfUtHgt9JSWGR2uFBaVGVcYH8P61W01qONFQ2yEqMeVNdk+hfbh5R4Yo3ycFc7fEeh5PtW8ZWXuxInCDGFUA9cn+wPpRN7pk9iotpIwXDk5HU8cH5VKIJYtsbiXnGSVJJz5469MfpQu0MlsyFShYIqk7Tu3AEbT/Ig4+uKKaLcMKoWVx+BR16cAfv186nhs7i2BWZQgIwwbIHTjn9Kn0uLvbqBZp+7R22OzHG35e36UtlKPbDTFVgZU5z7cnz9al1y+i0tlCP42wQwUFE44OM5zT6aO3je7trREIbhZQ2SMenzrlEtxZXryw3t13Nyjk4c7cNnnaT/AHoxVizlSoZ3PaLV9LDSQqr2kjb12fh/Y8/WtLLtDZ3k7SQA20zjE1srDupv/jfA/wDq2aFtJbe1s2iW4DvI34WeNlb043f603s+wl7rGyYWsVpE/JlfcD8wv/5VPcUeyPtuXQp1u9s0UI6W6Qj/AMqeJ8H/ALejpg9CAR7mobCHVr5z/h9nf3ULc7ghJBxwRJwG/wC4YYe/Supdm+wWj6KisyNeXGcmSc5GfZegq3RrtACjGPSpv1HhIZenrtnzve23aXSInk1LRZxbLn7x4cjB679vH146VY/s87V29xN/gt7gd5zazSNzn/0yfP2Jrs+COhqiduOxVtd7dY0i2EOoQNulWBQDKvOSB0LDrz1xijHIpOmH23DcRyIrcqp7hUI/E+Oa0hstPkKtGzbw/OWz51TNL+0ZPhVTWETvI3Eczxk7WU9JFz+U+/NXycxzRRywFdo6MnPFaUWPGal0EX9paFRJCq7iMAqxwPp51Xp3NqJEaFs/iBB8Pp9KZWwnJckrjkDNCrLKk6xOd/XOB+Klqx1o1s7Nbi3S4CFkP5SP78dTQrxm0cSbpMjPOM9emab6fcPEkkcCABzkRtltrZ6jml+oGVZDJc7GWRzh0BAGPLnpj3rJAvYHPPL3Mn3oBc+OM87z5HHTyqJxO0MlzLJEjQnYq+TEH8K49OvWpLsbCYu9j7tEZeSM8HpkdaXk20j9zcQtgxlIpVPiQjnJzgEUUZk9+93fwSLIhR0IVyPeq42m+I5UZzTTS3eK8ERkLpJwyrkZPpzT/wCFtDzIz7/zZA60rdB4pim51dNQtlE9hAbkEN3yk/h9MZ/36V5afCyzB2YRK6bgYxtKt5AD9AfqaA2jHc92ojQnOV8Z68n5cdPajreyV1Mviwh8SkjPNb/ARRNdb7i2aRYoxGzbAEPTHzre0sW71NrBlI59qIs7Qm3ZiSFDhtvrx1HlTTTbSVl3Ii7o/E2TiikMTabaRhWJcJsXnjmuG9p2t7/Wry7QbYA2VXOS3p+td8ihMoO1eT+IZrjkGlxyfaFDZuu2D/Ez4MdVTnH7U8dWyWTbSL59nXYm20exhvr+FX1GYBirciEeQHv61flHAqC2y7cedGiM1y7m7Lv4UiLFSqCazCg1Q+3Pa3WLPV00Ps7atJcvCJHljXLKDkcE8L06mnjG3ROUtF6mligXM8qRjGfG2KGhvbW6bbbXUMjeiOCf0qkaJ2CfUMXna7U5p5H5+GSchM/5m6sflgU5uOxHZNiIotOjtp+sc9vIUlU+qsD1pnGH6KnL8KH9qPZyOyL6jb2qqjt49o4Of5VD9kGp3cmo3OnSTmWD4fMW48jaRx+hNdXvNPa/0aSwvmW4kZNveMoG9h0Yj16fvXF+wiDSPtGsYbYkQ3O9drclPCwKH5EVaEuUaJzXGaaO0NCO7ORtJFCRwmGQMVI/z+lOCpUHPPzqGZUaErjrzQKWJ3R3naTvthTgEDFaTos8fdzfeBR0A5BoxUREbvACflUMkYjlgO8rGCSxUYI9etYIguoJfCZo1ZXkLBh4cDHQYHXzof4aC4VZ2kZQ4yOfEGHHUjn5Zz71ZxBHM7qkhY4yCThhSq4sfhxcW0l2SGU92DyA34jn0z0GKDQRLqIdJIjD3YkPBKru59eeh5ocyS5OROT5nJP9KmRxFIRIm5wPA+fwnHX9q0+Gj/N3YPmMN/apho802G7e3W3iIaEOzlSozkDn3x+1N9ORpIJCu0ttzgjkfKgY0jVgY8hOoUnn9ab6dbRS3A3zCNWHU+VFh6DLOSVoBE8n3UZyAMGm9pJbNZurSOsh6bR1pTa26xPLEZMqejDzo60iCkedNHQslYVbxohBBO6uYanA1n9rdsHj2d7cGRSDwQ6Hn55zXUoY2adfSq19oOliG90btGOF0+5QXXGfu2bAb6ZP60zWmK+0wTWO1eqHV7jReyOmm8ubfwXFw34InPlzxx50DcaP9oS7bq612CDGcopLD5eh+lWa3ddA0q5kQAK1xPPLKF3dXY7sDknGMDz4FVzUNV7UX1/Zy2xgt7G6VWULzPECwyJMgktj8qgDnGeMmUKqo6GkndvZY+yWp3M//A6lcie6QZLhduRTTWbJ2l7yIDdtOeOvoKHsNPNpdyXs0spjJ+7WbbuiXzBIHPl1JphqWt6VYvD/AIjfW9oZuIxNIFLY9M0nG1TZSU0pKUUU/VT2le1hk0SeOyuGkKyQSLh9vkxkIIPrgdOBzzT3Q9M1Y91LqmrSXKiJco8KEmX8x3BRhfQfv5Cwx91KgkjIbIyCPMVKPCPaqJ6ojJ278g8i7RxXIJdGuLP7XrNbKBpA1wbkqo/DGynLn0Gd36V2KQ56VXtSuTZa4ZI4meR9Ok3GMZfYkiZx643k4owlxYJR5JDc3ltJNJbxyBpIzhx6Z6HpyPcVjIMbRUWp2qTyWOo2zAgERtt/MrcY+WcH/wBtEL7ijFvyFpUqB/hlkOzJ58/ShTYMJ3jGZcdNuaPc7SdvWvELo4dGIf2pmDYqaBgG8DKyeJiVztxQN663cQEioZBkBwMD50xu5pI97nLuW5UnqPeg+6WeSK5MQWEuB3Skda1DJCSVWgu2tn7twNo3wgFW8/8AfyrY2sCkq7T7xw21BjPt4acavYQ4S5C5hV9jRk4GOvOPrSl5iGIS4kRQeED52j0qbGTvoGtlMcnhReDnxDOaItCA2AK93khIkbEeMke9F2MIaTBH1xTJBsOgtHWDfLnBPXNHwR469AOtR5Bj2ZziibXIWmSEbGFkm45x0re+sIdRsbiyuVDQ3ETROPUEYNeWnDH3FGKPOnRKbKv2bST/AA2K1uWLz2xMEjsOWZDt3fXGfrTxbeNTkIobzOOar9hqcNzq9+0G8ASbmV02lT+E/PlOvvT2Obe2K5vjbOiUZJKyt/aMP/DVysmpf4dAxCy3Hds52+ajHmartz2w7NWMMGktBLqqG1WQmdA5UDGPF5HADZzxmgvtT1+TWtWteyWkI0jRzrJdvkgZAyFz6AHJPtijdM0nR4rlXtdHjvLpEKd4QzZz1yv4QOT18jTrjD7ElCeX69Drs1267KmwjjFx8CcELbuoKxIoxwUyMcHz9auUU0VzEJLeaOWM/mjbIqhXnYuTVLdxc6FpwMgxlNsUi56kMg6/qKr8WhdoewGvWGrvcq+ivOltOokBIRzjxjAGASSCOh+dUSjJfgmTlB23Z1rGCc1XdWuVtu2OgxkcTrPC59Ay8fqyirJqLx2ofcw3AFsDqQATx9Aa5z2v1Ka51a2bTkLXFteWyQZON5LjIz6Yx+ppYwdglkVHQ47dI4BFACI9+4KfL0AraUADpip41lwDNgH+EHOKjmXINMo0qG5WwFvCxI5rSeZRsdfrU5UAHNBy8x5TBx60aGNbmCMqzucbhSwPBBbl03Bs84HH603aTv7TeQMr0z0pf3E7Dd3KuH4AHrSjI1kl3WS7QGVvEW6mkwSNAE2Qtt4zjr+1M7s3Mc0VvcRpBIW2gKfCB7/zrV4hG7IGyFOARAD++KVxGTQtsVglmHxBKA8q1MwsaMGgkL59KXWbxpashAduitTGwtmCbmxgHpTJUK2GKjJLHnkNTBFAGRQhAbawHK0XEwKe9MhWHWw5U+tGx9KBgOAp9KOjOQKZE5FT1+FdKkfUthCQSb5mUdInwGPyBCt8gaNF5DFYyXYkQRxRNIXzwAATTm/tUu7d45E3BlKMn8SngiuB6vcX/ZfU9R0OW4maylidYd5PiQg4+vkflmovFvRT3rjse/ZVodvqmn3Wu30jm8nnljuxk7m5ztz+UHz8z0qzdq+0U2gWtvHpltFCHkCIiRkk+oUCuP6L2kv9ISVtJlaCW6C9+V5G4eZB4zk1aJO1Vy1vazXUzS3CuN0smD4sANgD8KglhjGcgHOKd47fZKOWo0dM7P6neSaZbXGrBoZJWCFWGDu58vLgZqkfaV2nk7QaPf6Na2r/AA4RZlkjBLNsfDbgQMYwOlIx2hu7G3E0zyieWRm7qVtxWUZVlHt0I9iPWh9G16O11RYILcTwu0jyFhllWQ+XqB7+pqkYqJOTlLstep9rluZrWTAlYxRyrODjLBDx7ZyQQfWkem6idQ7W9nba0LGD4iPcW5PhycfTb19zVS1K9t7Z4oYVDKOZDswdytkhfocY9AK6B9jum/F3Fxrku5o4cw2pboWIG9wPpjI9TRnLirBCPJ0jszjjNCz8LRAffEreWKGuDgClKRA5c4bHNCy8RmjiwB8Iz60PK25GBWgVTA7RvumjY8VknMCTRy7dj425/pWqw91uwc8c1HbQLcHYGALHqfI0vQ1A11LI165ucFyPBuHB+Q9axWk2jBOMfx1vqUIt7pYDesjDLI2MqpI86WNdkMQbBCQeokPNBuwo1sLeNIWZgWGPCc0VaTPtJJPHl1BpzoOm2kmkgzMCQPEW420nfbASsRDRk8GhFm020NLdw8eehPpRkMRKbs0rt923zo2F3/CGNUQrD4G3Z9qLgkycE8eVARsBz/KiIRlSynnNEVjJCP0qrfaL2Ph7U6O/dKqahCC0EmOp/h+tWKOToD1qfvVQZZgoHUmj2Qkq2fIaGbT9RkgmUxzRvsZD+Vs81PcXrRzGRB4iPHk5B/1xiurduextn2r1O+utKK2V9BPtdinhmBRTk48+etUt/sz1pW2zXUG0nxMuTU5ZIrTZSGKctpFWuLv4hFE0u5QcjPDKcY+v+lNNFstV1O5UaRbvIxRkMnIQA56k/OrfpfYKwsmUz5uJPWQcfpXRtIsobSBUgjRFHkBUv5CbqJf+NSuRR9M+y6CSf4nXJzPI3WKHwRj+prp+m2Vvp1jFa2cKQwRjCRouAK3iUY6VFqGoWmmwCa+nSGIsFDNnkny4pblLthajFa0Ew6paxX0emTTKtzKhkijbjvFHXb6keY96it7+HUJbpIT47WUxSISMqR7enNVvtNpEHau2tZtF1BbfV7GTvrKZkZAT5qcgcEelc9uNa7RaN24hvbvS5La/SL/j4wfuriMcd4D0/wBiuuC+NM5JzqWjsZk5I5/Wo7iZAAB+1a6BqcHaPTf8Qgh7pt5UrnOSD1+RqG7UJcmEEmTqQfLPSg1RSMkzWe5jgh8Q5f3pbNddzAJYXjU5xsGS3zr3VsdzknJToB50vuosRWrvtTeucpywHHWplUR3Vw8wjlj3fE94A+9Sc56ECmS6ndRqES/wqjAzAmcVpp0MYaSWOeViWwh2/iGP2rYW8AGGQ7vPnzpbGoH+Ikuoi0Ykyv8AzM9CTXjsWAWPoB09K9064X4hIYZRGzj70N04op4k7zdLNEd4J3KeOKNeTX4DrKRig4B45qU7hJuTit7aWO2QPaTRsSh3KwrSJJXdicEAFj5YpkIFwnPJ6mjIl24YdfShYWVcHcpz5edQav2l0fS/u7q7CzADMaozN+wphZMcM6IhdmAOKVXVy8pDShhEPwgfzNVa47YyPM8iW5uLQc+Hwui/I8H9qEk+0fTZI5o4rW4V0HhSTCkn0Hl+9VSo55y5dD64kWz1eC5yPhr7EDP5LKOUz6ZBYfMKPOmEkaFTXEn7T30eo3Hxsl3cWF0SstrNwYwTkMvkGXqCP9a6X2Y7RLqlhsnkElzCAGdekqn8Mg+Y6+hyPKuT1MK+R1emnfwYzltlJyOKLsgVABIxWi4cZBrUMYzXGvi7Op9DZTtXOar3aRluzcxsQ+y1Hdof4mfB/ktNe+ynXyqidr9ZNhrGmoIXm3FywTkhAAS2PPB8vMZ866sM6yIhnheN2Ta3qEelrb23fP3Vq6yytExyAOmMdOa3OvwajdT391qGlyQ3EHw9us0oaQx5z0BHiJ9fSlF3e3kzSyaJaRSSXK4JmfO0D0XHiHzx8qp9wutMXsJp4RfxsSts9tF98v8AlJXGevh46cZ6V3s4Ei9aLr8ml24OgOsqQMe/sJcxyqcnJHJDCjdT1uTVpRdwd7bsf+YZfugmPc8H6VzO313UYABGtraMGw8tvYxpL9Ttzn9Kiv7e6a/tpLuSXZdSKCzHnBIxU2MjpFv2hsJrmK3bUIpwxC94i7VVumOTyM+dXyG3tTZoAiHK8kgVQdM7Jadp0BLWq3M5U7TN4uT0AzTl7eVFlsnuJUZIkMgVumfL9qnPG3tFY5FVMGmmv9Nv5IIneOMnwqPwsp9Dj+VSDUXx/wBRGvsZTxQtukpsviWnZhHuTxE/dhSQyAHzyPKkD6mgdgqWxGeCygE/TNJx/S3LQfpl23xcTzQGWPG5gPNfWnm2BLrNoSYGXJyOR7UgSMrfJBHgBZHCxiXAUddgJ/r1pjbi8DiefvEhfgOVyoP8PHnRWkG7LLZXdu0Zh7sd9nO4dMUSDztIOT51XbmKS1CTRglCM7lbpRVpqqww97OzFiPCuMk0yditVseXckdpZyXUkmxUHOec/SuR9utbvbq+iuNNmmiQgrIN3gf08J49eferXql1NqUSysV3RlHMB4G0ttwfX1+lC2lvFLc3NpeKDBv32zhRujIPiQ/IkY55BA9aokSls5x3t/eW7PPJIkK/iZQwX+WK0sLy1ttwn+LIcjdsAGQPfPFXPtDaWkaiKa6Cq2RGCuEYj1I8/pilem6DDNqaQynvLeaB2AjAOCuKYnVFYlnhfIS4aBAQQndl8/8Ac3WnWgXeo6FdR3HdrcWxXMkcTDeiHksF6488cj5V5qfZ9LKD4q37u7tm4XZ+Jc+ZXqvPT1oG03Zi0zUA6of+luB/zIWPkPVc9VJ+WDQlG1TAm4u0dx0eeO6tori2lWa3lGVkU5BzTC4iYpuQZNcV7NdpNQ7GagYrxfi9KuGJbZypOcF09G65U/XHWu3abe2uo2cN3YyrPbyruSReh/19q8+eFw14PQx51kX9gVqxbcsikEda5vqk4ve1OoXKkulrsso8HgEnLn58EfSuna9eW+i6TeapOVQQxlhnzbyH1Ncg7FyCCCFtQkhD3lxJNLJcthc9Mn15BOPereljtyJeoyJ1FE2s9o76ylNlokJtpHUK13Jgsi54Cenn70ng7P3V5CbgvJc3LOQWzyG65J/qatWtSrNDHNDAkdlcL91JPhwQCSryIfNtvHXH61lhC1zY3qTTMVE0gijwFVQB6DA8vSuxPVs5nHegDUdF+N0zTJQyyTTzRxyzRnPekYDHPn58+fWje0unBnni2gS2stu44/KXx/Sr52M0HT73QNLka5ybYFlHvnqf0pL2qscdq7VjL9xOvdzFRnwqd2fnxS2AJtJXudQu0JINnJG231yuQP61Bp96JLq+vJHdVnmJT12REAn9j+teWqS29z2lkjYM5lPdhTkjCYH9Khsnt4Lm2iKgxQ2bdPdkHPr0rNmSJLyaTTdOiWNe9nmdnlIU4AYkkn2yQKRs1uGIMSE55IZf7VBr13Ld6piGV+7TC8N15B6eZzioNpXwuh3Dg5Azn9KUJPaL3e1lJAeQ5Xy8v71c+zMPx98kF1LK8CSkCHf4OBxxWVlSLeBr2l06C0nV4NyhQDszlT9Kqka99ey94Sfzgent8qysp12xV9UEd2keqyoBwbTHUjoSR0+VDOM6zqEfRU5UenB/v+wr2sqqMJ+00S/4NpSAsARg4OM9DS8sU1+wiH4PhZUwRngqKysp30S8nmlr391iQkkhnznnjoPkKS9oo4u7G2JVO4eJcg9evpmvaylMwWd3n02J5HYi4AaVPysyttDY9cedGWmvar2asL1tGvZLdN8Td0Qrpli4JwwOPwjpWVlLVx2K9bQo1HtFq2v3UaarfSzoHBCngZ9cDirkrLZWWn3McMTs2IisiBl27Sx/f9qyspmkuhsbt7N9b06Du7W6BkDHUPh+7D+AIhwoA+n7mn/w0UBkjiBCmAP1825NeVlLIow3sTqM1n2Yt2jWN9wbO9c/mNez3Kalq9pFPZ26GbILxBlIwM5HOM8elZWViPkWWU8keo66iOVUlHOD1O0f2oSW5k+In6eFFQfLGf61lZSlF0APGFvGRSRt38jqcZxn9BQRvZgSA3A6cmvaygzI/9k="
          width={90}
          height={90}
          alt="Picture of the author"
        />
        <h6>Kiran D Patkar</h6>
      </div>
      <ul>
        <li>
          <Link href="">
            <IoMdHome size={24} />
            <span>HOME</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <GrUserManager size={24} />
            <span>ABOUT ME</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <GrUserManager size={24} />
            <span>EXPERIENCE</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <GrProjects size={24} />
            <span>PROJECTS</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <MdContactMail size={24} />
            <span>CONTACT ME</span>
          </Link>
        </li>
      </ul>
      <div className="social-media">
        <Link href="">
          <FaLinkedin />
        </Link>
        <Link href="">
          <FaGithub />
        </Link>
        <Link href="">
          <FaTwitter />
        </Link>
        <Link href="">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
