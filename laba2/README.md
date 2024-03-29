# Отчет по лабораторной работе №2

## Ход работы:

### Создание сетей и подключение к ним

1. **Создание сети провайдера**

   ![Создание сети провайдера](creating_provider_network.jpg)

2. **Создание подсети в сети провайдера**

   ![Создание подсети в сети провайдера](creating_subnetwork_in_provider_network.jpg)

3. **Создание локальной сети и подсети**

   ![Создание локальной сети и подсети](creating_local_network_and_subnetwork.jpg)

4. **Создание роутера и подключение созданных сетей**

   ![Создание роутера и подключение созданных сетей](creating_router_and_connect_subnet.jpg)

### Создание и настройка виртуальной машины

5. **Создание флейвора виртуальной машины и создание ключа доступа**

   ![Создание флейвора виртуальной машины](creating_flavor_and_keypair.jpg)

6. **Загрузка образа Cirros в OpenStack Glance**

   ![Загрузка образа Cirros](creating_image_cirros.jpg)

7. **Создание блочного устройства в Cinder**

   ![Создание блочного устройства](creating_volume.jpg)

8. **Создание виртуальной машины через Horizon**

   ![Создание виртуальной машины](creating_instance.jpg)

   ![Запуск виртуальной машины](launching_instance.jpg)

   ![Консоль созданной виртуальной машины](created_instance_console.jpg)

### Дополнительные задания

9. **Создание новой приватной сети и подключение к роутеру**

    ![Создание новой приватной сети](new_private_network.jpg)
    ![Создание новой приватной сети](Network_topology.jpg)

10. **Создание копии блочного устройства через CLI**

    ![Создание новой приватной сети](creating_new_disk.jpg)

11. **Создание второй виртуальной машины через CLI**

    ![Создание виртуальной машины из CLI](creating_instance_from_CLI.jpg)

12. **Проверка состояния инстанса**

    ![Проверка инстанса](instance_check.jpg)

### Результаты

- Созданы публичные и приватные сети.
- Создан и присвоен флейвор.
- Создано и подключено блочное устройство.
- Созданs рабочие инстансы.

### Вопросы

1. **Что именно сервис с помощью Keystone проверяет в токене пользователя?**

   Сервис с помощью Keystone проверяет подлинность токена, его актуальность (не истек ли срок действия), а также соответствие прав доступа пользователя для выполнения запрашиваемой операции.

2. **К эндпоинту какого сервиса Nova идет следом после Keystone?**

   После Keystone, Nova обычно обращается к сервису Glance для получения образов ВМ или к сервису Neutron для настройки сетевых интерфейсов, в зависимости от контекста операции, которую она выполняет.