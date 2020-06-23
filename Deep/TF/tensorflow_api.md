# tensorflow api

## tf
* tf.AggregationMethod
* tf.argsort
* tf.batch_to_space
* tf.bitcast
* tf.boolean_mask
* tf.broadcast_dynamic_shape
* tf.broadcast_static_shape
* tf.broadcast_to
* tf.case
* tf.clip_by_global_norm
* tf.clip_by_norm
* tf.clip_by_value
* tf.concat
* tf.cond
* tf.constant
* tf.constant_initializer
* tf.control_dependencies
* tf.convert_to_tensor
* tf.CriticalSection
* tf.custom_gradient
* tf.device
* tf.DeviceSpec
* tf.Assert
* tf.dynamic_partition
* tf.dynamic_stitch
* tf.edit_distance
* tf.einsum
* tf.ensure_shape
* tf.executing_eagerly
* tf.expand_dims
* tf.extract_volume_patches
* tf.eye
* tf.fill
* tf.fingerprint
* tf.foldl
* tf.foldr
* tf.function
* tf.gather
* tf.gather_nd
* tf.get_logger
* tf.get_static_value
* tf.grad_pass_through
* tf.gradients
* tf.GradientTape
* tf.Graph
* tf.group
* tf.guarantee_const
* tf.hessians
* tf.histogram_fixed_width
* tf.histogram_fixed_width_bins
* tf.identity
* tf.identity_n
* tf.IndexedSlices
* tf.IndexedSlicesSpec
* tf.init_scope
* tf.is_tensor
* tf.linspace
* tf.load_library
* tf.load_op_library
* tf.make_ndarray
* tf.make_tensor_proto
* tf.map_fn
* tf.meshgrid
* tf.Module
* tf.name_scope
* tf.nondifferentiable_batch_function
* tf.norm
* tf.no_gradient
* tf.no_op
* tf.numpy_function
* tf.ones
* tf.one_hot
* tf.ones_initializer
* tf.ones_like
* tf.Operation
* tf.OptionalSpec
* tf.pad
* tf.parallel_stack
* tf.print
* tf.py_function
* tf.RaggedTensor
* tf.RaggedTensorSpec
* tf.random_normal_initializer
* tf.random_uniform_initializer
* tf.range
* tf.rank
* tf.realdiv
* tf.recompute_grad
* tf.reduce_all
* tf.RegisterGradient
* tf.register_tensor_conversion_function
* tf.required_space_to_batch_paddings
* tf.reshape
* tf.reverse
* tf.reverse_sequence
* tf.roll
* tf.scan
* tf.scatter_nd
* tf.searchsorted
* tf.sequence_mask
* tf.shape
* tf.shape_n
* tf.size
* tf.slice
* tf.sort
* tf.space_to_batch
* tf.space_to_batch_nd
* tf.SparseTensorSpec
* tf.split
* tf.squeeze
* tf.stack
* tf.stop_gradient
* tf.strided_slice
* tf.switch_case
* tf.Tensor
* tf.TensorArray
* tf.TensorArraySpec
* tf.tensor_scatter_nd_add
* tf.tensor_scatter_nd_sub
* tf.tensor_scatter_nd_update
* tf.tile
* tf.timestamp
* tf.transpose
* tf.truediv
* tf.truncatediv
* tf.truncatemod
* tf.tuple
* tf.TypeSpec
* tf.UnconnectedGradients
* tf.unique
* tf.unique_with_counts
* tf.unravel_index
* tf.unstack
* tf.Variable
* tf.Variable.SaveSliceInfo
* tf.VariableAggregation
* tf.VariableSynchronization
* tf.variable_creator_scope
* tf.vectorized_map
* tf.where
* tf.while_loop
* tf.zeros
* tf.zeros_initializer
* tf.zeros_like
* tf.__version__    // tf版本
* tf.__path__     // tensorflow安装路径为

## tf.audio
* tf.audio.decode_wav
* tf.audio.encode_wav


## tf.autograph
* tf.autograph.set_verbosity
* tf.autograph.to_code
* tf.autograph.to_graph
* tf.autograph.trace
### tf.autograph.experimental
* tf.autograph.experimental.Feature
* tf.autograph.experimental.do_not_convert
* tf.autograph.experimental.set_loop_options


## tf.bitwise
* tf.bitwise.bitwise_and
* tf.bitwise.bitwise_or
* tf.bitwise.bitwise_xor
* tf.bitwise.invert
* tf.bitwise.left_shift
* tf.bitwise.right_shift

## tf.compat
* tf.compat.as_bytes
* tf.compat.as_str
* tf.compat.as_str_any
* tf.compat.as_text
* tf.compat.dimension_at_index
* tf.compat.dimension_value
* tf.compat.forward_compatibility_horizon
* tf.compat.forward_compatible
* tf.compat.path_to_str


## tf.config
* tf.config.experimental_connect_to_cluster
* tf.config.experimental_connect_to_host
* tf.config.experimental_list_devices
* tf.config.experimental_run_functions_eagerly
* tf.config.get_soft_device_placement
* tf.config.set_soft_device_placement
### tf.config.experimental
* tf.config.experimental.VirtualDeviceConfiguration
* tf.config.experimental.get_device_policy
* tf.config.experimental.get_memory_growth
* tf.config.experimental.get_synchronous_execution
* tf.config.experimental.get_virtual_device_configuration
* tf.config.experimental.get_visible_devices
* tf.config.experimental.list_logical_devices
* tf.config.experimental.list_physical_devices
* tf.config.experimental.set_device_policy
* tf.config.experimental.set_memory_growth
* tf.config.experimental.set_synchronous_execution
* tf.config.experimental.set_virtual_device_configuration
* tf.config.experimental.set_visible_devices
#### tf.config.optimizer
* tf.config.optimizer.get_experimental_options
* tf.config.optimizer.get_jit
* tf.config.optimizer.set_experimental_options
* tf.config.optimizer.set_jit
#### tf.config.threading
* tf.config.threading.get_inter_op_parallelism_threads
* tf.config.threading.get_intra_op_parallelism_threads
* tf.config.threading.set_inter_op_parallelism_threads
* tf.config.threading.set_intra_op_parallelism_threads

## tf.data
* tf.data.DatasetSpec
* tf.data.Options
### tf.data.experimental
* tf.data.experimental.CheckpointInputPipelineHook
* tf.data.experimental.Counter
* tf.data.experimental.DistributeOptions
* tf.data.experimental.MapVectorizationOptions
* tf.data.experimental.OptimizationOptions
* tf.data.experimental.Optional
* tf.data.experimental.Reducer
* tf.data.experimental.StatsAggregator
* tf.data.experimental.StatsOptions
* tf.data.experimental.TFRecordWriter
* tf.data.experimental.ThreadingOptions
* tf.data.experimental.bucket_by_sequence_length
* tf.data.experimental.bytes_produced_stats
* tf.data.experimental.cardinality
* tf.data.experimental.choose_from_datasets
* tf.data.experimental.copy_to_device
* tf.data.experimental.dense_to_sparse_batch
* tf.data.experimental.enumerate_dataset
* tf.data.experimental.from_variant
* tf.data.experimental.get_next_as_optional
* tf.data.experimental.get_single_element
* tf.data.experimental.get_structure
* tf.data.experimental.group_by_reducer
* tf.data.experimental.group_by_window
* tf.data.experimental.ignore_errors
* tf.data.experimental.latency_stats
* tf.data.experimental.make_batched_features_dataset
* tf.data.experimental.make_csv_dataset
* tf.data.experimental.make_saveable_from_iterator
* tf.data.experimental.unique

## tf.debugging
* tf.debugging.Assert
* tf.debugging.assert_all_finite
* tf.debugging.assert_equal
* tf.debugging.assert_greater
* tf.debugging.assert_greater_equal
* tf.debugging.assert_integer
* tf.debugging.assert_less
* tf.debugging.assert_less_equal
* tf.debugging.assert_near
* tf.debugging.assert_negative
* tf.debugging.assert_non_negative
* tf.debugging.assert_non_positive
* tf.debugging.assert_none_equal
* tf.debugging.assert_positive
* tf.debugging.assert_proper_iterable
* tf.debugging.assert_rank
* tf.debugging.assert_rank_at_least
* tf.debugging.assert_rank_in
* tf.debugging.assert_same_float_dtype
* tf.debugging.assert_scalar
* tf.debugging.assert_shapes
* tf.debugging.assert_type
* tf.debugging.check_numerics
* tf.debugging.get_log_device_placement
* tf.debugging.is_numeric_tensor
* tf.debugging.set_log_device_placement

## tf.distribute
* tf.distribute.CrossDeviceOps
* tf.distribute.HierarchicalCopyAllReduce
* tf.distribute.InputContext
* tf.distribute.InputReplicationMode
* tf.distribute.MirroredStrategy
* tf.distribute.NcclAllReduce
* tf.distribute.OneDeviceStrategy
* tf.distribute.ReduceOp
* tf.distribute.ReductionToOneDevice
* tf.distribute.ReplicaContext
* tf.distribute.Server
* tf.distribute.Strategy
* tf.distribute.StrategyExtended
* tf.distribute.get_replica_context
* tf.distribute.get_strategy
* tf.distribute.has_strategy
* tf.distribute.in_cross_replica_context
### tf.distribute.cluster_resolver
* tf.distribute.cluster_resolver.ClusterResolver
* tf.distribute.cluster_resolver.GCEClusterResolver
* tf.distribute.cluster_resolver.KubernetesClusterResolver
* tf.distribute.cluster_resolver.SimpleClusterResolver
* tf.distribute.cluster_resolver.SlurmClusterResolver
* tf.distribute.cluster_resolver.TFConfigClusterResolver
* tf.distribute.cluster_resolver.TPUClusterResolver
* tf.distribute.cluster_resolver.UnionResolver
### tf.distribute.experimental
* tf.distribute.experimental.CentralStorageStrategy
* tf.distribute.experimental.CollectiveCommunication
* tf.distribute.experimental.MultiWorkerMirroredStrategy
* tf.distribute.experimental.ParameterServerStrategy
* tf.distribute.experimental.TPUStrategy
* tf.distribute.experimental_set_strategy

## tf.dtypes
* tf.dtypes.DType
* tf.dtypes.as_dtype
* tf.dtypes.cast
* tf.dtypes.complex
* tf.dtypes.saturate_cast

## tf.errors
* tf.errors.AbortedError
* tf.errors.AlreadyExistsError
* tf.errors.CancelledError
* tf.errors.DataLossError
* tf.errors.DeadlineExceededError
* tf.errors.FailedPreconditionError
* tf.errors.InternalError
* tf.errors.InvalidArgumentError
* tf.errors.NotFoundError
* tf.errors.OpError
* tf.errors.OutOfRangeError
* tf.errors.PermissionDeniedError
* tf.errors.ResourceExhaustedError
* tf.errors.UnauthenticatedError
* tf.errors.UnavailableError
* tf.errors.UnimplementedError
* tf.errors.UnknownError

## tf.estimator
* tf.estimator.BaselineClassifier
* tf.estimator.BaselineEstimator
* tf.estimator.BaselineRegressor
* tf.estimator.BestExporter
* tf.estimator.BinaryClassHead
* tf.estimator.BoostedTreesClassifier
* tf.estimator.BoostedTreesEstimator
* tf.estimator.BoostedTreesRegressor
* tf.estimator.CheckpointSaverHook
* tf.estimator.CheckpointSaverListener
* tf.estimator.DNNClassifier
* tf.estimator.DNNEstimator
* tf.estimator.DNNLinearCombinedClassifier
* tf.estimator.DNNLinearCombinedEstimator
* tf.estimator.DNNLinearCombinedRegressor
* tf.estimator.DNNRegressor
* tf.estimator.Estimator
* tf.estimator.EstimatorSpec
* tf.estimator.EvalSpec
* tf.estimator.Exporter
* tf.estimator.FeedFnHook
* tf.estimator.FinalExporter
* tf.estimator.FinalOpsHook
* tf.estimator.GlobalStepWaiterHook
* tf.estimator.Head
* tf.estimator.LatestExporter
* tf.estimator.LinearClassifier
* tf.estimator.LinearEstimator
* tf.estimator.LinearRegressor
* tf.estimator.LoggingTensorHook
* tf.estimator.LogisticRegressionHead
* tf.estimator.ModeKeys
* tf.estimator.MultiClassHead
* tf.estimator.MultiHead
* tf.estimator.MultiLabelHead
* tf.estimator.NanLossDuringTrainingError
* tf.estimator.NanTensorHook
* tf.estimator.PoissonRegressionHead
* tf.estimator.ProfilerHook
* tf.estimator.RegressionHead
* tf.estimator.regressor_parse_example_spec
* tf.estimator.train_and_evaluate
* tf.estimator.RunConfig
* tf.estimator.SecondOrStepTimer
* tf.estimator.SessionRunArgs
* tf.estimator.SessionRunContext
* tf.estimator.SessionRunHook
* tf.estimator.SessionRunValues
* tf.estimator.StepCounterHook
* tf.estimator.StopAtStepHook
* tf.estimator.SummarySaverHook
* tf.estimator.TrainSpec
* tf.estimator.VocabInfo
* tf.estimator.WarmStartSettings
* tf.estimator.add_metrics
* tf.estimator.classifier_parse_example_spec
* tf.estimator.experimental
### tf.estimator.experimental.InMemoryEvaluatorHook
* tf.estimator.experimental.LinearSDCA
* tf.estimator.experimental.RNNClassifier
* tf.estimator.experimental.RNNEstimator
* tf.estimator.experimental.build_raw_supervised_input_receiver_fn
* tf.estimator.experimental.call_logit_fn
* tf.estimator.experimental.make_early_stopping_hook
* tf.estimator.experimental.make_stop_at_checkpoint_step_hook
* tf.estimator.experimental.stop_if_higher_hook
* tf.estimator.experimental.stop_if_lower_hook
* tf.estimator.experimental.stop_if_no_decrease_hook
* tf.estimator.experimental.stop_if_no_increase_hook
### tf.estimator.export
* tf.estimator.export.ClassificationOutput
* tf.estimator.export.ExportOutput
* tf.estimator.export.PredictOutput
* tf.estimator.export.RegressionOutput
* tf.estimator.export.ServingInputReceiver
* tf.estimator.export.TensorServingInputReceiver
* tf.estimator.export.build_parsing_serving_input_receiver_fn
* tf.estimator.export.build_raw_serving_input_receiver_fn

## tf.experimental
* tf.experimental.function_executor_type

## tf.feature_column
* tf.feature_column.bucketized_column
* tf.feature_column.categorical_column_with_hash_bucket
* tf.feature_column.categorical_column_with_identity
* tf.feature_column.categorical_column_with_vocabulary_file
* tf.feature_column.categorical_column_with_vocabulary_list
* tf.feature_column.crossed_column
* tf.feature_column.embedding_column
* tf.feature_column.indicator_column
* tf.feature_column.make_parse_example_spec
* tf.feature_column.numeric_column
* tf.feature_column.sequence_categorical_column_with_hash_bucket
* tf.feature_column.sequence_categorical_column_with_identity
* tf.feature_column.sequence_categorical_column_with_vocabulary_file
* tf.feature_column.sequence_categorical_column_with_vocabulary_list
* tf.feature_column.sequence_numeric_column
* tf.feature_column.shared_embeddings
* tf.feature_column.weighted_categorical_column

## tf.graph_util
* tf.import_graph_def
* tf.graph_util.import_graph_def

## tf.image
* tf.image.ResizeMethod
* tf.image.adjust_brightness
* tf.image.adjust_contrast
* tf.image.adjust_gamma
* tf.image.adjust_hue
* tf.image.adjust_jpeg_quality
* tf.image.adjust_saturation
* tf.image.central_crop
* tf.image.combined_non_max_suppression
* tf.image.convert_image_dtype
* tf.image.crop_and_resize
* tf.image.crop_to_bounding_box
* tf.image.draw_bounding_boxes
* tf.image.encode_png
* tf.image.extract_glimpse
* tf.image.extract_patches
* tf.image.flip_left_right
* tf.image.flip_up_down
* tf.image.grayscale_to_rgb
* tf.image.hsv_to_rgb
* tf.image.image_gradients
* tf.image.non_max_suppression
* tf.image.non_max_suppression_overlaps
* tf.image.non_max_suppression_padded
* tf.image.non_max_suppression_with_scores
* tf.image.pad_to_bounding_box
* tf.image.per_image_standardization
* tf.image.psnr
* tf.image.random_brightness
* tf.image.random_contrast
* tf.image.random_crop
* tf.image.random_flip_left_right
* tf.image.random_flip_up_down
* tf.image.random_hue
* tf.image.random_jpeg_quality
* tf.image.random_saturation
* tf.image.resize
* tf.image.resize_with_crop_or_pad
* tf.image.resize_with_pad
* tf.image.rgb_to_grayscale
* tf.image.rgb_to_hsv
* tf.image.rgb_to_yiq
* tf.image.rgb_to_yuv
* tf.image.rot90
* tf.image.sample_distorted_bounding_box
* tf.image.sobel_edges
* tf.image.ssim
* tf.image.ssim_multiscale
* tf.image.total_variation
* tf.image.transpose
* tf.image.yiq_to_rgb
* tf.image.yuv_to_rgb

## tf.io
* tf.io.FixedLenFeature
* tf.io.FixedLenSequenceFeature
* tf.io.SparseFeature
* tf.io.TFRecordOptions
* tf.io.TFRecordWriter
* tf.io.VarLenFeature
* tf.io.decode_and_crop_jpeg
* tf.io.decode_base64
* tf.io.decode_bmp
* tf.io.decode_compressed
* tf.io.decode_csv
* tf.io.decode_gif
* tf.io.decode_image
* tf.io.decode_jpeg
* tf.io.decode_json_example
* tf.io.decode_png
* tf.io.decode_proto
* tf.io.decode_raw
* tf.io.deserialize_many_sparse
* tf.io.encode_base64
* tf.io.encode_jpeg
* tf.io.encode_proto
* tf.io.extract_jpeg_shape
* tf.io.is_jpeg
* tf.io.match_filenames_once
* tf.io.matching_files
* tf.io.parse_example
* tf.io.parse_sequence_example
* tf.io.parse_single_example
* tf.io.parse_single_sequence_example
* tf.io.parse_tensor
* tf.io.read_file
* tf.io.serialize_many_sparse
* tf.io.serialize_sparse
* tf.io.serialize_tensor
* tf.io.write_file
* tf.io.write_graph
* tf.io.gfile
### tf.io.gfile.GFile
* tf.io.gfile.copy
* tf.io.gfile.exists
* tf.io.gfile.glob
* tf.io.gfile.isdir
* tf.io.gfile.listdir
* tf.io.gfile.makedirs
* tf.io.gfile.mkdir
* tf.io.gfile.remove
* tf.io.gfile.rename
* tf.io.gfile.rmtree
* tf.io.gfile.stat
* tf.io.gfile.walk

## tf.keras
* tf.keras.Input
* tf.keras.Model
* tf.keras.Sequential
### tf.keras.activations
* tf.keras.activations.deserialize
* tf.keras.activations.elu
* tf.keras.activations.exponential
* tf.keras.activations.get
* tf.keras.activations.hard_sigmoid
* tf.keras.activations.linear
* tf.keras.activations.relu
* tf.keras.activations.selu
* tf.keras.activations.serialize
* tf.keras.activations.sigmoid
* tf.keras.activations.softmax
* tf.keras.activations.softplus
* tf.keras.activations.softsign
* tf.keras.activations.tanh
### tf.keras.applications
* tf.keras.applications.DenseNet121
* tf.keras.applications.DenseNet169
* tf.keras.applications.DenseNet201
* tf.keras.applications.InceptionResNetV2
* tf.keras.applications.InceptionV3
* tf.keras.applications.MobileNet
* tf.keras.applications.MobileNetV2
* tf.keras.applications.NASNetLarge
* tf.keras.applications.NASNetMobile
* tf.keras.applications.ResNet101
* tf.keras.applications.ResNet101V2
* tf.keras.applications.ResNet152
* tf.keras.applications.ResNet152V2
* tf.keras.applications.ResNet50
* tf.keras.applications.ResNet50V2
* tf.keras.applications.VGG16
* tf.keras.applications.VGG19
* tf.keras.applications.Xception
* tf.keras.applications.densenet
* tf.keras.applications.densenet.DenseNet121
* tf.keras.applications.densenet.DenseNet169
* tf.keras.applications.densenet.DenseNet201
* tf.keras.applications.densenet.decode_predictions
* tf.keras.applications.densenet.preprocess_input
* tf.keras.applications.imagenet_utils
* tf.keras.applications.imagenet_utils.decode_predictions
* tf.keras.applications.imagenet_utils.preprocess_input
* tf.keras.applications.inception_resnet_v2
* tf.keras.applications.inception_resnet_v2.InceptionResNetV2
* tf.keras.applications.inception_resnet_v2.decode_predictions
* tf.keras.applications.inception_resnet_v2.preprocess_input
* tf.keras.applications.inception_v3
* tf.keras.applications.inception_v3.InceptionV3
* tf.keras.applications.inception_v3.decode_predictions
* tf.keras.applications.inception_v3.preprocess_input
* tf.keras.applications.mobilenet
* tf.keras.applications.mobilenet.MobileNet
* tf.keras.applications.mobilenet.decode_predictions
* tf.keras.applications.mobilenet.preprocess_input
* tf.keras.applications.mobilenet_v2
* tf.keras.applications.mobilenet_v2.MobileNetV2
* tf.keras.applications.mobilenet_v2.decode_predictions
* tf.keras.applications.mobilenet_v2.preprocess_input
* tf.keras.applications.nasnet
* tf.keras.applications.nasnet.NASNetLarge
* tf.keras.applications.nasnet.NASNetMobile
* tf.keras.applications.nasnet.decode_predictions
* tf.keras.applications.nasnet.preprocess_input
* tf.keras.applications.resnet
* tf.keras.applications.resnet.ResNet101
* tf.keras.applications.resnet.ResNet152
* tf.keras.applications.resnet.ResNet50
* tf.keras.applications.resnet.decode_predictions
* tf.keras.applications.resnet.preprocess_input
* tf.keras.applications.resnet50
* tf.keras.applications.resnet50.ResNet50
* tf.keras.applications.resnet50.decode_predictions
* tf.keras.applications.resnet50.preprocess_input
* tf.keras.applications.resnet_v2
* tf.keras.applications.resnet_v2.ResNet101V2
* tf.keras.applications.resnet_v2.ResNet152V2
* tf.keras.applications.resnet_v2.ResNet50V2
* tf.keras.applications.resnet_v2.decode_predictions
* tf.keras.applications.resnet_v2.preprocess_input
* tf.keras.applications.vgg16
* tf.keras.applications.vgg16.VGG16
* tf.keras.applications.vgg16.decode_predictions
* tf.keras.applications.vgg16.preprocess_input
* tf.keras.applications.vgg19
* tf.keras.applications.vgg19.VGG19
* tf.keras.applications.vgg19.decode_predictions
* tf.keras.applications.vgg19.preprocess_input
* tf.keras.applications.xception
* tf.keras.applications.xception.Xception
* tf.keras.applications.xception.decode_predictions
* tf.keras.applications.xception.preprocess_input
### tf.keras.backend
* tf.keras.backend.abs
* tf.keras.backend.all
* tf.keras.backend.any
* tf.keras.backend.arange
* tf.keras.backend.argmax
* tf.keras.backend.argmin
* tf.keras.backend.backend
* tf.keras.backend.batch_dot
* tf.keras.backend.batch_flatten
* tf.keras.backend.batch_get_value
* tf.keras.backend.batch_normalization
* tf.keras.backend.batch_set_value
* tf.keras.backend.bias_add
* tf.keras.backend.binary_crossentropy
* tf.keras.backend.cast
* tf.keras.backend.cast_to_floatx
* tf.keras.backend.categorical_crossentropy
* tf.keras.backend.clear_session
* tf.keras.backend.clip
* tf.keras.backend.concatenate
* tf.keras.backend.constant
* tf.keras.backend.conv1d
* tf.keras.backend.conv2d
* tf.keras.backend.conv2d_transpose
* tf.keras.backend.conv3d
* tf.keras.backend.cos
* tf.keras.backend.count_params
* tf.keras.backend.ctc_batch_cost
* tf.keras.backend.ctc_decode
* tf.keras.backend.ctc_label_dense_to_sparse
* tf.keras.backend.cumprod
* tf.keras.backend.cumsum
* tf.keras.backend.dot
* tf.keras.backend.dropout
* tf.keras.backend.dtype
* tf.keras.backend.elu
* tf.keras.backend.epsilon
* tf.keras.backend.equal
* tf.keras.backend.eval
* tf.keras.backend.exp
* tf.keras.backend.expand_dims
* tf.keras.backend.eye
* tf.keras.backend.flatten
* tf.keras.backend.floatx
* tf.keras.backend.foldl
* tf.keras.backend.foldr
* tf.keras.backend.function
* tf.keras.backend.gather
* tf.keras.backend.get_uid
* tf.keras.backend.get_value
* tf.keras.backend.gradients
* tf.keras.backend.greater
* tf.keras.backend.greater_equal
* tf.keras.backend.hard_sigmoid
* tf.keras.backend.image_data_format
* tf.keras.backend.in_test_phase
* tf.keras.backend.in_top_k
* tf.keras.backend.in_train_phase
* tf.keras.backend.int_shape
* tf.keras.backend.is_sparse
* tf.keras.backend.l2_normalize
* tf.keras.backend.learning_phase
* tf.keras.backend.learning_phase_scope
* tf.keras.backend.less
* tf.keras.backend.less_equal
* tf.keras.backend.local_conv1d
* tf.keras.backend.local_conv2d
* tf.keras.backend.log
* tf.keras.backend.manual_variable_initialization
* tf.keras.backend.map_fn
* tf.keras.backend.max
* tf.keras.backend.maximum
* tf.keras.backend.mean
* tf.keras.backend.min
* tf.keras.backend.minimum
* tf.keras.backend.moving_average_update
* tf.keras.backend.name_scope
* tf.keras.backend.ndim
* tf.keras.backend.normalize_batch_in_training
* tf.keras.backend.not_equal
* tf.keras.backend.one_hot
* tf.keras.backend.ones
* tf.keras.backend.ones_like
* tf.keras.backend.permute_dimensions
* tf.keras.backend.placeholder
* tf.keras.backend.pool2d
* tf.keras.backend.pool3d
* tf.keras.backend.pow
* tf.keras.backend.print_tensor
* tf.keras.backend.prod
* tf.keras.backend.random_binomial
* tf.keras.backend.random_normal
* tf.keras.backend.random_normal_variable
* tf.keras.backend.random_uniform
* tf.keras.backend.random_uniform_variable
* tf.keras.backend.relu
* tf.keras.backend.repeat
* tf.keras.backend.repeat_elements
* tf.keras.backend.reset_uids
* tf.keras.backend.reshape
* tf.keras.backend.resize_images
* tf.keras.backend.resize_volumes
* tf.keras.backend.reverse
* tf.keras.backend.rnn
* tf.keras.backend.round
* tf.keras.backend.separable_conv2d
* tf.keras.backend.set_epsilon
* tf.keras.backend.set_floatx
* tf.keras.backend.set_image_data_format
* tf.keras.backend.set_learning_phase
* tf.keras.backend.set_value
* tf.keras.backend.shape
* tf.keras.backend.sigmoid
* tf.keras.backend.sign
* tf.keras.backend.sin
* tf.keras.backend.softmax
* tf.keras.backend.softplus
* tf.keras.backend.softsign
* tf.keras.backend.sparse_categorical_crossentropy
* tf.keras.backend.spatial_2d_padding
* tf.keras.backend.spatial_3d_padding
* tf.keras.backend.sqrt
* tf.keras.backend.square
* tf.keras.backend.squeeze
* tf.keras.backend.stack
* tf.keras.backend.std
* tf.keras.backend.stop_gradient
* tf.keras.backend.sum
* tf.keras.backend.switch
* tf.keras.backend.tanh
* tf.keras.backend.temporal_padding
* tf.keras.backend.tile
* tf.keras.backend.to_dense
* tf.keras.backend.transpose
* tf.keras.backend.truncated_normal
* tf.keras.backend.update
* tf.keras.backend.update_add
* tf.keras.backend.update_sub
* tf.keras.backend.var
* tf.keras.backend.variable
* tf.keras.backend.zeros
* tf.keras.backend.zeros_like
### tf.keras.callbacks
* tf.keras.callbacks.BaseLogger
* tf.keras.callbacks.CSVLogger
* tf.keras.callbacks.Callback
* tf.keras.callbacks.EarlyStopping
* tf.keras.callbacks.History
* tf.keras.callbacks.LambdaCallback
* tf.keras.callbacks.LearningRateScheduler
* tf.keras.callbacks.ModelCheckpoint
* tf.keras.callbacks.ProgbarLogger
* tf.keras.callbacks.ReduceLROnPlateau
* tf.keras.callbacks.RemoteMonitor
* tf.keras.callbacks.TensorBoard
* tf.keras.callbacks.TerminateOnNaN
### tf.keras.constraints
* tf.keras.constraints.Constraint
* tf.keras.constraints.MaxNorm
* tf.keras.constraints.MinMaxNorm
* tf.keras.constraints.NonNeg
* tf.keras.constraints.RadialConstraint
* tf.keras.constraints.UnitNorm
* tf.keras.constraints.deserialize
* tf.keras.constraints.get
* tf.keras.constraints.max_norm
* tf.keras.constraints.min_max_norm
* tf.keras.constraints.non_neg
* tf.keras.constraints.radial_constraint
* tf.keras.constraints.serialize
* tf.keras.constraints.unit_norm
### tf.keras.datasets
* tf.keras.datasets.boston_housing
* tf.keras.datasets.boston_housing.load_data
* tf.keras.datasets.cifar10
* tf.keras.datasets.cifar10.load_data
* tf.keras.datasets.cifar100
* tf.keras.datasets.cifar100.load_data
* tf.keras.datasets.fashion_mnist
* tf.keras.datasets.fashion_mnist.load_data
* tf.keras.datasets.imdb
* tf.keras.datasets.imdb.get_word_index
* tf.keras.datasets.imdb.load_data
* tf.keras.datasets.mnist
* tf.keras.datasets.mnist.load_data
* tf.keras.datasets.reuters
* tf.keras.datasets.reuters.get_word_index
* tf.keras.datasets.reuters.load_data
### tf.keras.estimator
* tf.keras.estimator.model_to_estimator
### tf.keras.experimental
* tf.keras.experimental.CosineDecay
* tf.keras.experimental.CosineDecayRestarts
* tf.keras.experimental.LinearCosineDecay
* tf.keras.experimental.LinearModel
* tf.keras.experimental.NoisyLinearCosineDecay
* tf.keras.experimental.PeepholeLSTMCell
* tf.keras.experimental.SequenceFeatures
* tf.keras.experimental.WideDeepModel
* tf.keras.experimental.export_saved_model
* tf.keras.experimental.load_from_saved_model
* tf.keras.experimental.terminate_keras_multiprocessing_pools
### tf.keras.initializers
* tf.keras.initializers.Constant
* tf.keras.initializers.GlorotNormal
* tf.keras.initializers.GlorotUniform
* tf.keras.initializers.Identity
* tf.keras.initializers.Initializer
* tf.keras.initializers.Orthogonal
* tf.keras.initializers.TruncatedNormal
* tf.keras.initializers.VarianceScaling
* tf.keras.initializers.deserialize
* tf.keras.initializers.get
* tf.keras.initializers.glorot_normal
* tf.keras.initializers.glorot_uniform
* tf.keras.initializers.he_normal
* tf.keras.initializers.he_uniform
* tf.keras.initializers.identity
* tf.keras.initializers.lecun_normal
* tf.keras.initializers.lecun_uniform
* tf.keras.initializers.serialize
* tf.keras.initializers.orthogonal
* tf.keras.initializers.Ones
* tf.keras.initializers.RandomNormal
* tf.keras.initializers.RandomUniform
* tf.keras.initializers.Zeros
* tf.keras.initializers.constant
* tf.keras.initializers.ones
* tf.keras.initializers.zeros
### tf.keras.layers
* tf.keras.layers.AbstractRNNCell
* tf.keras.layers.Activation
* tf.keras.layers.ActivityRegularization
* tf.keras.layers.Add
* tf.keras.layers.AdditiveAttention
* tf.keras.layers.AlphaDropout
* tf.keras.layers.Attention
* tf.keras.layers.Average
* tf.keras.layers.AveragePooling1D
* tf.keras.layers.AveragePooling2D
* tf.keras.layers.AveragePooling3D
* tf.keras.layers.AvgPool1D
* tf.keras.layers.AvgPool2D
* tf.keras.layers.AvgPool3D
* tf.keras.layers.BatchNormalization
* tf.keras.layers.Bidirectional
* tf.keras.layers.Concatenate
* tf.keras.layers.Conv1D
* tf.keras.layers.Conv2D
* tf.keras.layers.Conv2DTranspose
* tf.keras.layers.Conv3D
* tf.keras.layers.Conv3DTranspose
* tf.keras.layers.ConvLSTM2D
* tf.keras.layers.Convolution1D
* tf.keras.layers.Convolution2D
* tf.keras.layers.Convolution2DTranspose
* tf.keras.layers.Convolution3D
* tf.keras.layers.Convolution3DTranspose
* tf.keras.layers.Cropping1D
* tf.keras.layers.Cropping2D
* tf.keras.layers.Cropping3D
* tf.keras.layers.Dense
* tf.keras.layers.DenseFeatures
* tf.keras.layers.DepthwiseConv2D
* tf.keras.layers.Dot
* tf.keras.layers.Dropout
* tf.keras.layers.ELU
* tf.keras.layers.Embedding
* tf.keras.layers.Flatten
* tf.keras.layers.GRU
* tf.keras.layers.GRUCell
* tf.keras.layers.GaussianDropout
* tf.keras.layers.GaussianNoise
* tf.keras.layers.GlobalAveragePooling1D
* tf.keras.layers.GlobalAveragePooling2D
* tf.keras.layers.GlobalAveragePooling3D
* tf.keras.layers.GlobalAvgPool1D
* tf.keras.layers.GlobalAvgPool2D
* tf.keras.layers.GlobalAvgPool3D
* tf.keras.layers.GlobalMaxPool1D
* tf.keras.layers.GlobalMaxPool2D
* tf.keras.layers.GlobalMaxPool3D
* tf.keras.layers.GlobalMaxPooling1D
* tf.keras.layers.GlobalMaxPooling2D
* tf.keras.layers.GlobalMaxPooling3D
* tf.keras.layers.Input
* tf.keras.layers.InputLayer
* tf.keras.layers.InputSpec
* tf.keras.layers.LSTM
* tf.keras.layers.LSTMCell
* tf.keras.layers.Lambda
* tf.keras.layers.Layer
* tf.keras.layers.LayerNormalization
* tf.keras.layers.LeakyReLU
* tf.keras.layers.LocallyConnected1D
* tf.keras.layers.LocallyConnected2D
* tf.keras.layers.Masking
* tf.keras.layers.MaxPool1D
* tf.keras.layers.MaxPool2D
* tf.keras.layers.MaxPool3D
* tf.keras.layers.MaxPooling1D
* tf.keras.layers.MaxPooling2D
* tf.keras.layers.MaxPooling3D
* tf.keras.layers.Maximum
* tf.keras.layers.Minimum
* tf.keras.layers.Multiply
* tf.keras.layers.PReLU
* tf.keras.layers.Permute
* tf.keras.layers.RNN
* tf.keras.layers.ReLU
* tf.keras.layers.RepeatVector
* tf.keras.layers.Reshape
* tf.keras.layers.SeparableConv1D
* tf.keras.layers.SeparableConv2D
* tf.keras.layers.SeparableConvolution1D
* tf.keras.layers.SeparableConvolution2D
* tf.keras.layers.SimpleRNN
* tf.keras.layers.SimpleRNNCell
* tf.keras.layers.Softmax
* tf.keras.layers.SpatialDropout1D
* tf.keras.layers.SpatialDropout2D
* tf.keras.layers.SpatialDropout3D
* tf.keras.layers.StackedRNNCells
* tf.keras.layers.Subtract
* tf.keras.layers.ThresholdedReLU
* tf.keras.layers.TimeDistributed
* tf.keras.layers.UpSampling1D
* tf.keras.layers.UpSampling2D
* tf.keras.layers.UpSampling3D
* tf.keras.layers.Wrapper
* tf.keras.layers.ZeroPadding1D
* tf.keras.layers.ZeroPadding2D
* tf.keras.layers.ZeroPadding3D
* tf.keras.layers.add
* tf.keras.layers.average
* tf.keras.layers.concatenate
* tf.keras.layers.deserialize
* tf.keras.layers.dot
* tf.keras.layers.maximum
* tf.keras.layers.minimum
* tf.keras.layers.multiply
* tf.keras.layers.serialize
* tf.keras.layers.subtract
### tf.keras.losses
* tf.keras.losses.BinaryCrossentropy
* tf.keras.losses.CategoricalCrossentropy
* tf.keras.losses.CategoricalHinge
* tf.keras.losses.CosineSimilarity
* tf.keras.losses.Hinge
* tf.keras.losses.Huber
* tf.keras.losses.KLD
* tf.keras.losses.KLDivergence
* tf.keras.losses.LogCosh
* tf.keras.losses.Loss
* tf.keras.losses.MAE
* tf.keras.losses.MAPE
* tf.keras.losses.MSE
* tf.keras.losses.MSLE
* tf.keras.losses.MeanAbsoluteError
* tf.keras.losses.MeanAbsolutePercentageError
* tf.keras.losses.MeanSquaredError
* tf.keras.losses.MeanSquaredLogarithmicError
* tf.keras.losses.Poisson
* tf.keras.losses.Reduction
* tf.keras.losses.SparseCategoricalCrossentropy
* tf.keras.losses.SquaredHinge
* tf.keras.losses.binary_crossentropy
* tf.keras.losses.categorical_crossentropy
* tf.keras.losses.categorical_hinge
* tf.keras.losses.cosine_similarity
* tf.keras.losses.deserialize
* tf.keras.losses.get
* tf.keras.losses.hinge
* tf.keras.losses.kld
* tf.keras.losses.kullback_leibler_divergence
* tf.keras.losses.logcosh
* tf.keras.losses.mae
* tf.keras.losses.mape
* tf.keras.losses.mean_absolute_error
* tf.keras.losses.mean_absolute_percentage_error
* tf.keras.losses.mean_squared_error
* tf.keras.losses.mean_squared_logarithmic_error
* tf.keras.losses.mse
* tf.keras.losses.msle
* tf.keras.losses.poisson
* tf.keras.losses.serialize
* tf.keras.losses.sparse_categorical_crossentropy
* tf.keras.losses.squared_hinge
### tf.keras.metrics
* tf.keras.metrics.AUC
* tf.keras.metrics.Accuracy
* tf.keras.metrics.BinaryAccuracy
* tf.keras.metrics.BinaryCrossentropy
* tf.keras.metrics.CategoricalAccuracy
* tf.keras.metrics.CategoricalCrossentropy
* tf.keras.metrics.CategoricalHinge
* tf.keras.metrics.CosineSimilarity
* tf.keras.metrics.FalseNegatives
* tf.keras.metrics.FalsePositives
* tf.keras.metrics.Hinge
* tf.keras.metrics.KLD
* tf.keras.metrics.KLDivergence
* tf.keras.metrics.LogCoshError
* tf.keras.metrics.MAE
* tf.keras.metrics.MAPE
* tf.keras.metrics.MSE
* tf.keras.metrics.MSLE
* tf.keras.metrics.Mean
* tf.keras.metrics.MeanAbsoluteError
* tf.keras.metrics.MeanAbsolutePercentageError
* tf.keras.metrics.MeanIoU
* tf.keras.metrics.MeanRelativeError
* tf.keras.metrics.MeanSquaredError
* tf.keras.metrics.MeanSquaredLogarithmicError
* tf.keras.metrics.MeanTensor
* tf.keras.metrics.Metric
* tf.keras.metrics.Poisson
* tf.keras.metrics.Precision
* tf.keras.metrics.Recall
* tf.keras.metrics.RootMeanSquaredError
* tf.keras.metrics.SensitivityAtSpecificity
* tf.keras.metrics.SparseCategoricalAccuracy
* tf.keras.metrics.SparseCategoricalCrossentropy
* tf.keras.metrics.SparseTopKCategoricalAccuracy
* tf.keras.metrics.SpecificityAtSensitivity
* tf.keras.metrics.SquaredHinge
* tf.keras.metrics.Sum
* tf.keras.metrics.TopKCategoricalAccuracy
* tf.keras.metrics.TrueNegatives
* tf.keras.metrics.TruePositives
* tf.keras.metrics.binary_accuracy
* tf.keras.metrics.binary_crossentropy
* tf.keras.metrics.categorical_accuracy
* tf.keras.metrics.categorical_crossentropy
* tf.keras.metrics.deserialize
* tf.keras.metrics.get
* tf.keras.metrics.hinge
* tf.keras.metrics.kld
* tf.keras.metrics.kullback_leibler_divergence
* tf.keras.metrics.mae
* tf.keras.metrics.mape
* tf.keras.metrics.mean_absolute_error
* tf.keras.metrics.mean_absolute_percentage_error
* tf.keras.metrics.mean_squared_error
* tf.keras.metrics.mean_squared_logarithmic_error
* tf.keras.metrics.mse
* tf.keras.metrics.msle
* tf.keras.metrics.poisson
* tf.keras.metrics.serialize
* tf.keras.metrics.sparse_categorical_accuracy
* tf.keras.metrics.sparse_categorical_crossentropy
* tf.keras.metrics.sparse_top_k_categorical_accuracy
* tf.keras.metrics.squared_hinge
* tf.keras.metrics.top_k_categorical_accuracy
### tf.keras.mixed_precision
* tf.keras.mixed_precision.experimental
* tf.keras.mixed_precision.experimental.LossScaleOptimizer
* tf.keras.mixed_precision.experimental.Policy
* tf.keras.mixed_precision.experimental.global_policy
* tf.keras.mixed_precision.experimental.set_policy
### tf.keras.models
* tf.keras.models.Model
* tf.keras.models.Sequential
* tf.keras.models.clone_model
* tf.keras.models.load_model
* tf.keras.models.model_from_config
* tf.keras.models.model_from_json
* tf.keras.models.model_from_yaml
* tf.keras.models.save_model
### tf.keras.optimizers
* tf.keras.optimizers.Adadelta
* tf.keras.optimizers.Adagrad
* tf.keras.optimizers.Adam
* tf.keras.optimizers.Adamax
* tf.keras.optimizers.Ftrl
* tf.keras.optimizers.Nadam
* tf.keras.optimizers.Optimizer
* tf.keras.optimizers.RMSprop
* tf.keras.optimizers.SGD
* tf.keras.optimizers.deserialize
* tf.keras.optimizers.get
* tf.keras.optimizers.schedules
* tf.keras.optimizers.schedules.ExponentialDecay
* tf.keras.optimizers.schedules.InverseTimeDecay
* tf.keras.optimizers.schedules.LearningRateSchedule
* tf.keras.optimizers.schedules.PiecewiseConstantDecay
* tf.keras.optimizers.schedules.PolynomialDecay
* tf.keras.optimizers.schedules.deserialize
* tf.keras.optimizers.schedules.serialize
* tf.keras.optimizers.serialize
### tf.keras.preprocessing
* tf.keras.preprocessing.image
* tf.keras.preprocessing.image.DirectoryIterator
* tf.keras.preprocessing.image.ImageDataGenerator
* tf.keras.preprocessing.image.Iterator
* tf.keras.preprocessing.image.NumpyArrayIterator
* tf.keras.preprocessing.image.apply_affine_transform
* tf.keras.preprocessing.image.apply_brightness_shift
* tf.keras.preprocessing.image.apply_channel_shift
* tf.keras.preprocessing.image.array_to_img
* tf.keras.preprocessing.image.img_to_array
* tf.keras.preprocessing.image.load_img
* tf.keras.preprocessing.image.random_brightness
* tf.keras.preprocessing.image.random_channel_shift
* tf.keras.preprocessing.image.random_rotation
* tf.keras.preprocessing.image.random_shear
* tf.keras.preprocessing.image.random_shift
* tf.keras.preprocessing.image.random_zoom
* tf.keras.preprocessing.image.save_img
* tf.keras.preprocessing.sequence
* tf.keras.preprocessing.sequence.TimeseriesGenerator
* tf.keras.preprocessing.sequence.make_sampling_table
* tf.keras.preprocessing.sequence.pad_sequences
* tf.keras.preprocessing.sequence.skipgrams
* tf.keras.preprocessing.text
* tf.keras.preprocessing.text.Tokenizer
* tf.keras.preprocessing.text.hashing_trick
* tf.keras.preprocessing.text.one_hot
* tf.keras.preprocessing.text.text_to_word_sequence
### tf.keras.regularizers
* tf.keras.regularizers.L1L2
* tf.keras.regularizers.Regularizer
* tf.keras.regularizers.deserialize
* tf.keras.regularizers.get
* tf.keras.regularizers.l1
* tf.keras.regularizers.l1_l2
* tf.keras.regularizers.l2
* tf.keras.regularizers.serialize
### tf.keras.utils
* tf.keras.utils.CustomObjectScope
* tf.keras.utils.GeneratorEnqueuer
* tf.keras.utils.HDF5Matrix
* tf.keras.utils.OrderedEnqueuer
* tf.keras.utils.Progbar
* tf.keras.utils.Sequence
* tf.keras.utils.SequenceEnqueuer
* tf.keras.utils.convert_all_kernels_in_model
* tf.keras.utils.custom_object_scope
* tf.keras.utils.deserialize_keras_object
* tf.keras.utils.get_custom_objects
* tf.keras.utils.get_file
* tf.keras.utils.get_source_inputs
* tf.keras.utils.model_to_dot
* tf.keras.utils.multi_gpu_model
* tf.keras.utils.normalize
* tf.keras.utils.plot_model
* tf.keras.utils.serialize_keras_object
* tf.keras.utils.to_categorical
### tf.keras.wrappers
* tf.keras.wrappers.scikit_learn
* tf.keras.wrappers.scikit_learn.KerasClassifier
* tf.keras.wrappers.scikit_learn.KerasRegressor

## tf.linalg
* tf.linalg.LinearOperator
* tf.linalg.LinearOperatorAdjoint
* tf.linalg.LinearOperatorBlockDiag
* tf.linalg.LinearOperatorCirculant
* tf.linalg.LinearOperatorCirculant2D
* tf.linalg.LinearOperatorCirculant3D
* tf.linalg.LinearOperatorComposition
* tf.linalg.LinearOperatorDiag
* tf.linalg.LinearOperatorFullMatrix
* tf.linalg.LinearOperatorHouseholder
* tf.linalg.LinearOperatorIdentity
* tf.linalg.LinearOperatorInversion
* tf.linalg.LinearOperatorKronecker
* tf.linalg.LinearOperatorLowRankUpdate
* tf.linalg.LinearOperatorLowerTriangular
* tf.linalg.LinearOperatorScaledIdentity
* tf.linalg.LinearOperatorToeplitz
* tf.linalg.LinearOperatorZeros
* tf.linalg.adjoint
* tf.linalg.band_part
* tf.linalg.cholesky
* tf.linalg.cholesky_solve
* tf.linalg.cross
* tf.linalg.det
* tf.linalg.diag
* tf.linalg.diag_part
* tf.linalg.eigh
* tf.linalg.eigvalsh
* tf.linalg.einsum
* tf.linalg.expm
* tf.linalg.eye
* tf.linalg.global_norm
* tf.linalg.inv
* tf.linalg.l2_normalize
* tf.linalg.logdet
* tf.linalg.logm
* tf.linalg.lstsq
* tf.linalg.lu
* tf.linalg.matmul
* tf.linalg.matrix_transpose
* tf.linalg.matvec
* tf.linalg.norm
* tf.linalg.normalize
* tf.linalg.qr
* tf.linalg.set_diag
* tf.linalg.slogdet
* tf.linalg.solve
* tf.linalg.sqrtm
* tf.linalg.svd
* tf.linalg.tensor_diag
* tf.linalg.tensor_diag_part
* tf.linalg.tensordot
* tf.linalg.trace
* tf.linalg.triangular_solve
* tf.linalg.tridiagonal_matmul
* tf.linalg.tridiagonal_solve

## tf.lite
* tf.lite.Interpreter
* tf.lite.OpsSet
* tf.lite.Optimize
* tf.lite.RepresentativeDataset
* tf.lite.TFLiteConverter
* tf.lite.TargetSpec
### tf.lite.experimental
* tf.lite.experimental.load_delegate

## tf.lookup
* tf.lookup.KeyValueTensorInitializer
* tf.lookup.StaticHashTable
* tf.lookup.StaticVocabularyTable
* tf.lookup.TextFileIndex
* tf.lookup.TextFileInitializer
### tf.lookup.experimental
* tf.lookup.experimental.DenseHashTable

## tf.losses

## tf.math
* tf.math.abs
* tf.math.accumulate_n
* tf.math.acos
* tf.math.acosh
* tf.math.add
* tf.math.add_n
* tf.math.angle
* tf.math.argmax
* tf.math.argmin
* tf.math.asin
* tf.math.asinh
* tf.math.atan
* tf.math.atan2
* tf.math.atanh
* tf.math.bessel_i0
* tf.math.bessel_i0e
* tf.math.bessel_i1
* tf.math.bessel_i1e
* tf.math.betainc
* tf.math.bincount
* tf.math.ceil
* tf.math.confusion_matrix
* tf.math.conj
* tf.math.cos
* tf.math.cosh
* tf.math.count_nonzero
* tf.math.cumprod
* tf.math.cumsum
* tf.math.cumulative_logsumexp
* tf.math.digamma
* tf.math.divide
* tf.math.divide_no_nan
* tf.math.equal
* tf.math.erf
* tf.math.erfc
* tf.math.exp
* tf.math.expm1
* tf.math.floor
* tf.math.floordiv
* tf.math.floormod
* tf.math.greater
* tf.math.greater_equal
* tf.math.igamma
* tf.math.igammac
* tf.math.imag
* tf.math.in_top_k
* tf.math.invert_permutation
* tf.math.is_finite
* tf.math.is_inf
* tf.math.is_nan
* tf.math.is_non_decreasing
* tf.math.is_strictly_increasing
* tf.math.l2_normalize
* tf.math.lbeta
* tf.math.less
* tf.math.less_equal
* tf.math.lgamma
* tf.math.log
* tf.math.log1p
* tf.math.log_sigmoid
* tf.math.log_softmax
* tf.math.logical_and
* tf.math.logical_not
* tf.math.logical_or
* tf.math.logical_xor
* tf.math.maximum
* tf.math.minimum
* tf.math.mod
* tf.math.multiply
* tf.math.multiply_no_nan
* tf.math.negative
* tf.math.nextafter
* tf.math.not_equal
* tf.math.polygamma
* tf.math.polyval
* tf.math.pow
* tf.math.real
* tf.math.reciprocal
* tf.math.reciprocal_no_nan
* tf.math.reduce_all
* tf.math.reduce_any
* tf.math.reduce_euclidean_norm
* tf.math.reduce_logsumexp
* tf.math.reduce_max
* tf.math.reduce_mean
* tf.math.reduce_min
* tf.math.reduce_prod
* tf.math.reduce_std
* tf.math.reduce_sum
* tf.math.reduce_variance
* tf.math.rint
* tf.math.round
* tf.math.rsqrt
* tf.math.scalar_mul
* tf.math.segment_max
* tf.math.segment_mean
* tf.math.segment_min
* tf.math.segment_prod
* tf.math.segment_sum
* tf.math.sigmoid
* tf.math.sign
* tf.math.sin
* tf.math.sinh
* tf.math.softmax
* tf.math.softplus
* tf.math.softsign
* tf.math.sqrt
* tf.math.square
* tf.math.squared_difference
* tf.math.subtract
* tf.math.tan
* tf.math.tanh
* tf.math.top_k
* tf.math.truediv
* tf.math.unsorted_segment_max
* tf.math.unsorted_segment_mean
* tf.math.unsorted_segment_min
* tf.math.unsorted_segment_prod
* tf.math.unsorted_segment_sqrt_n
* tf.math.unsorted_segment_sum
* tf.math.xdivy
* tf.math.xlogy
* tf.math.zero_fraction
* tf.math.zeta

## tf.metrics
* tf.nest
* tf.nest.assert_same_structure
* tf.nest.flatten
* tf.nest.is_nested
* tf.nest.map_structure
* tf.nest.pack_sequence_as

## tf.nn
* tf.nn.RNNCellDeviceWrapper
* tf.nn.RNNCellDropoutWrapper
* tf.nn.RNNCellResidualWrapper
* tf.nn.all_candidate_sampler
* tf.nn.atrous_conv2d
* tf.nn.atrous_conv2d_transpose
* tf.nn.avg_pool
* tf.nn.avg_pool1d
* tf.nn.avg_pool2d
* tf.nn.avg_pool3d
* tf.nn.batch_norm_with_global_normalization
* tf.nn.batch_normalization
* tf.nn.bias_add
* tf.nn.collapse_repeated
* tf.nn.compute_accidental_hits
* tf.nn.compute_average_loss
* tf.nn.conv1d
* tf.nn.conv1d_transpose
* tf.nn.conv2d
* tf.nn.conv2d_transpose
* tf.nn.conv3d
* tf.nn.conv3d_transpose
* tf.nn.conv_transpose
* tf.nn.convolution
* tf.nn.crelu
* tf.nn.ctc_beam_search_decoder
* tf.nn.ctc_greedy_decoder
* tf.nn.ctc_loss
* tf.nn.ctc_unique_labels
* tf.nn.depth_to_space
* tf.nn.depthwise_conv2d
* tf.nn.depthwise_conv2d_backprop_filter
* tf.nn.depthwise_conv2d_backprop_input
* tf.nn.dilation2d
* tf.nn.dropout
* tf.nn.elu
* tf.nn.embedding_lookup
* tf.nn.embedding_lookup_sparse
* tf.nn.erosion2d
* tf.nn.fixed_unigram_candidate_sampler
* tf.nn.fractional_avg_pool
* tf.nn.fractional_max_pool
* tf.nn.in_top_k
* tf.nn.l2_loss
* tf.nn.l2_normalize
* tf.nn.leaky_relu
* tf.nn.learned_unigram_candidate_sampler
* tf.nn.local_response_normalization
* tf.nn.log_poisson_loss
* tf.nn.log_softmax
* tf.nn.lrn
* tf.nn.max_pool
* tf.nn.max_pool1d
* tf.nn.max_pool2d
* tf.nn.max_pool3d
* tf.nn.max_pool_with_argmax
* tf.nn.moments
* tf.nn.nce_loss
* tf.nn.normalize_moments
* tf.nn.pool
* tf.nn.relu
* tf.nn.relu6
* tf.nn.safe_embedding_lookup_sparse
* tf.nn.sampled_softmax_loss
* tf.nn.scale_regularization_loss
* tf.nn.selu
* tf.nn.separable_conv2d
* tf.nn.sigmoid
* tf.nn.sigmoid_cross_entropy_with_logits
* tf.nn.softmax
* tf.nn.softmax_cross_entropy_with_logits
* tf.nn.softplus
* tf.nn.softsign
* tf.nn.space_to_batch
* tf.nn.space_to_depth
* tf.nn.sparse_softmax_cross_entropy_with_logits
* tf.nn.sufficient_statistics
* tf.nn.tanh
* tf.nn.top_k
* tf.nn.weighted_cross_entropy_with_logits
* tf.nn.weighted_moments
* tf.nn.with_space_to_batch
* tf.nn.zero_fraction

## tf.optimizers
* tf.optimizers.Adadelta
* tf.optimizers.Adagrad
* tf.optimizers.Adam
* tf.optimizers.Adamax
* tf.optimizers.Ftrl
* tf.optimizers.Nadam
* tf.optimizers.Optimizer
* tf.optimizers.RMSprop
* tf.optimizers.SGD
* tf.optimizers.deserialize
* tf.optimizers.get
### tf.optimizers.schedules
* tf.optimizers.schedules.ExponentialDecay
* tf.optimizers.schedules.InverseTimeDecay
* tf.optimizers.schedules.LearningRateSchedule
* tf.optimizers.schedules.PiecewiseConstantDecay
* tf.optimizers.schedules.PolynomialDecay
* tf.optimizers.schedules.deserialize
* tf.optimizers.schedules.serialize
* tf.optimizers.serialize

## tf.quantization
* tf.quantization.dequantize
* tf.quantization.fake_quant_with_min_max_args
* tf.quantization.fake_quant_with_min_max_args_gradient
* tf.quantization.fake_quant_with_min_max_vars
* tf.quantization.fake_quant_with_min_max_vars_gradient
* tf.quantization.fake_quant_with_min_max_vars_per_channel
* tf.quantization.fake_quant_with_min_max_vars_per_channel_gradient
* tf.quantization.quantize
* tf.quantization.quantize_and_dequantize
* tf.quantization.quantized_concat

## tf.queue
* tf.queue.FIFOQueue
* tf.queue.PaddingFIFOQueue
* tf.queue.PriorityQueue
* tf.queue.QueueBase
* tf.queue.RandomShuffleQueue

## tf.ragged
* tf.ragged.boolean_mask
* tf.ragged.constant
* tf.ragged.map_flat_values
* tf.ragged.range
* tf.ragged.row_splits_to_segment_ids
* tf.ragged.segment_ids_to_row_splits
* tf.ragged.stack
* tf.ragged.stack_dynamic_partitions

## tf.random
* tf.random.all_candidate_sampler
* tf.random.categorical
* tf.random.fixed_unigram_candidate_sampler
* tf.random.gamma
* tf.random.learned_unigram_candidate_sampler
* tf.random.log_uniform_candidate_sampler
* tf.random.normal
* tf.random.poisson
* tf.random.set_seed
* tf.random.shuffle
* tf.random.stateless_categorical
* tf.random.stateless_normal
* tf.random.stateless_truncated_normal
* tf.random.stateless_uniform
* tf.random.truncated_normal
* tf.random.uniform
* tf.random.uniform_candidate_sampler
### tf.random.experimental
* ßtf.random.experimental.Generator
* ßtf.random.experimental.create_rng_state
* ßtf.random.experimental.get_global_generator
* ßtf.random.experimental.set_global_generator

## tf.raw_ops


## tf.saved_model


## tf.sets
* tf.sets.difference
* tf.sets.intersection
* tf.sets.size
* tf.sets.union

## tf.signal
* tf.signal.dct
* tf.signal.fft
* tf.signal.fft2d
* tf.signal.fft3d
* tf.signal.fftshift
* tf.signal.frame
* tf.signal.hamming_window
* tf.signal.hann_window
* tf.signal.idct
* tf.signal.ifft
* tf.signal.ifft2d
* tf.signal.ifft3d
* tf.signal.ifftshift
* tf.signal.inverse_stft
* tf.signal.inverse_stft_window_fn
* tf.signal.irfft
* tf.signal.irfft2d
* tf.signal.irfft3d
* tf.signal.linear_to_mel_weight_matrix
* tf.signal.mfccs_from_log_mel_spectrograms
* tf.signal.overlap_and_add
* tf.signal.rfft
* tf.signal.rfft2d
* tf.signal.rfft3d
* tf.signal.stft

## tf.sparse
* tf.sparse.SparseTensor
* tf.sparse.add
* tf.sparse.concat
* tf.sparse.cross
* tf.sparse.cross_hashed
* tf.sparse.expand_dims
* tf.sparse.eye
* tf.sparse.fill_empty_rows
* tf.sparse.from_dense
* tf.sparse.mask
* tf.sparse.maximum
* tf.sparse.minimum
* tf.sparse.reduce_max
* tf.sparse.reduce_sum
* tf.sparse.reorder
* tf.sparse.reset_shape
* tf.sparse.reshape
* tf.sparse.retain
* tf.sparse.segment_mean
* tf.sparse.segment_sqrt_n
* tf.sparse.segment_sum
* tf.sparse.slice
* tf.sparse.softmax
* tf.sparse.sparse_dense_matmul
* tf.sparse.split
* tf.sparse.to_dense
* tf.sparse.to_indicator
* tf.sparse.transpose

## tf.strings
* tf.strings.as_string
* tf.strings.bytes_split
* tf.strings.format
* tf.strings.join
* tf.strings.length
* tf.strings.lower
* tf.strings.ngrams
* tf.strings.reduce_join
* tf.strings.regex_full_match
* tf.strings.regex_replace
* tf.strings.split
* tf.strings.strip
* tf.strings.substr
* tf.strings.to_hash_bucket
* tf.strings.to_hash_bucket_fast
* tf.strings.to_hash_bucket_strong
* tf.strings.to_number
* tf.strings.unicode_decode
* tf.strings.unicode_decode_with_offsets
* tf.strings.unicode_encode
* tf.strings.unicode_script
* tf.strings.unicode_split
* tf.strings.unicode_split_with_offsets
* tf.strings.unicode_transcode
* tf.strings.unsorted_segment_join
* tf.strings.upper

## tf.summary
* tf.summary.SummaryWriter
* tf.summary.audio
* tf.summary.create_file_writer
* tf.summary.create_noop_writer
* tf.summary.flush
* tf.summary.histogram
* tf.summary.image
* tf.summary.record_if
* tf.summary.scalar
* tf.summary.text
* tf.summary.trace_export
* tf.summary.trace_off
* tf.summary.trace_on
* tf.summary.write
### tf.summary.experimental
* tf.summary.experimental.get_step
* tf.summary.experimental.set_step
* tf.summary.experimental.summary_scope
* tf.summary.experimental.write_raw_pb

## tf.sysconfig
* tf.sysconfig.get_compile_flags
* tf.sysconfig.get_include
* tf.sysconfig.get_lib
* tf.sysconfig.get_link_flags

## tf.test
* tf.test.Benchmark
* tf.test.TestCase
* tf.test.TestCase.failureException
* tf.test.assert_equal_graph_def
* tf.test.benchmark_config
* tf.test.compute_gradient
* tf.test.create_local_cluster
* tf.test.gpu_device_name
* tf.test.is_built_with_cuda
* tf.test.is_built_with_gpu_support
* tf.test.is_built_with_rocm
* tf.test.is_gpu_available
* tf.test.main

## tf.tpu
* tf.tpu.experimental
* tf.tpu.experimental.DeviceAssignment
* tf.tpu.experimental.initialize_tpu_system

## tf.train
* tf.train.BytesList
* tf.train.Checkpoint
* tf.train.CheckpointManager
* tf.train.ClusterDef
* tf.train.ClusterSpec
* tf.train.Coordinator
* tf.train.Example
* tf.train.ExponentialMovingAverage
* tf.train.Feature
* tf.train.FeatureList
* tf.train.FeatureLists
* tf.train.FeatureLists.FeatureListEntry
* tf.train.Features
* tf.train.Features.FeatureEntry
* tf.train.FloatList
* tf.train.Int64List
* tf.train.JobDef
* tf.train.JobDef.TasksEntry
* tf.train.SequenceExample
* tf.train.ServerDef
* tf.train.checkpoints_iterator
* tf.train.get_checkpoint_state
* tf.train.latest_checkpoint
* tf.train.list_variables
* tf.train.load_checkpoint
* tf.train.load_variable
### tf.train.experimental
* tf.train.experimental.DynamicLossScale
* tf.train.experimental.FixedLossScale
* tf.train.experimental.LossScale
* tf.train.experimental.PythonState
* tf.train.experimental.disable_mixed_precision_graph_rewrite
* tf.train.experimental.enable_mixed_precision_graph_rewrite

## tf.version


## tf.xla 


## Modules
name            |   comment
-               |   -
audio           |   module: Public API for tf.audio namespace.
autograph       |   module: Conversion of plain Python into TensorFlow graph code.
bitwise         |   module: Operations for manipulating the binary representations of integers.
compat          |   module: Functions for Python 2 vs. 3 compatibility.
config          |   module: Public API for tf.config namespace.
data            |   module: tf.data.Dataset API for input pipelines.
debugging       |   module: Public API for tf.debugging namespace.
distribute      |   module: Library for running a computation across multiple devices.
dtypes          |   module: Public API for tf.dtypes namespace.
errors          |   module: Exception types for TensorFlow errors.
estimator       |   module: Estimator: High level tools for working with models.
experimental    |   module: Public API for tf.experimental namespace.
feature_column  |   module: Public API for tf.feature_column namespace.
graph_util      |   module: Helpers to manipulate a tensor graph in python.
image           |   module: Image processing and decoding ops.
initializers    |   module: Keras initializer serialization / deserialization.
io              |   module: Public API for tf.io namespace.
keras           |   module: Implementation of the Keras API meant to be a high-level API for TensorFlow.
linalg          |   module: Operations for linear algebra.
lite            |   module: Public API for tf.lite namespace.
lookup          |   module: Public API for tf.lookup namespace.
losses          |   module: Built-in loss functions.
math            |   module: Math Operations.
metrics         |   module: Built-in metrics.
nest            |   module: Public API for tf.nest namespace.
nn              |   module: Wrappers for primitive Neural Net (NN) Operations.
optimizers      |   module: Built-in optimizer classes.
quantization    |   module: Public API for tf.quantization namespace.
queue           |   module: Public API for tf.queue namespace.
ragged          |   module: Ragged Tensors.
random          |   module: Public API for tf.random namespace.
raw_ops         |   module: Public API for tf.raw_ops namespace.
saved_model     |   module: Public API for tf.saved_model namespace.
sets            |   module: Tensorflow set operations.
signal          |   module: Signal processing operations.
sparse          |   module: Sparse Tensor Representation.
strings         |   module: Operations for working with string Tensors.
summary         |   module: Operations for writing summary data, for use in analysis and visualization.
sysconfig       |   module: System configuration library.
test            |   module: Testing.
tpu             |   module: Ops related to Tensor Processing Units.
train           |   module: Support for training models.
version         |   module: Public API for tf.version namespace.
xla             |   module: Public API for tf.xla namespace.



## Classes
name                                |   comment
-                                   |   -     
class AggregationMethod:            |   A class listing aggregation methods used to combine gradients.
class CriticalSection:              |   Critical section.
class DType:                        |   Represents the type of the elements in a Tensor.
class DeviceSpec:                   |   Represents a (possibly partial) specification for a TensorFlow device.
class GradientTape:                 |   Record operations for automatic differentiation.
class Graph:                        |   A TensorFlow computation, represented as a dataflow graph.
class IndexedSlices:                |   A sparse representation of a set of tensor slices at given indices.
class IndexedSlicesSpec:            |   Type specification for a tf.IndexedSlices.
class Module:                       |   Base neural network module class.
class Operation:                    |   Represents a graph node that performs computation on tensors.
class OptionalSpec:                 |   Represents an optional potentially containing a structured value.
class RaggedTensor:                 |   Represents a ragged tensor.
class RaggedTensorSpec:             |   Type specification for a tf.RaggedTensor.
class RegisterGradient:             |   A decorator for registering the gradient function for an op type.
class SparseTensor:                 |   Represents a sparse tensor.
class SparseTensorSpec:             |   Type specification for a tf.SparseTensor.
class Tensor:                       |   Represents one of the outputs of an Operation.
class TensorArray:                  |   Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays.
class TensorArraySpec:              |   Type specification for a tf.TensorArray.
class TensorShape:                  |   Represents the shape of a Tensor.
class TensorSpec:                   |   Describes a tf.Tensor.
class TypeSpec:                     |   Specifies a TensorFlow value type.
class UnconnectedGradients:         |   Controls how gradient computation behaves when y does not depend on x.
class Variable:                     |   See the Variables Guide.
class VariableAggregation:          |   Indicates how a distributed variable will be aggregated.
class VariableSynchronization:      |   Indicates when a distributed variable will be synced.
class constant_initializer:         |   Initializer that generates tensors with constant values.
class name_scope:                   |   A context manager for use when defining a Python op.
class ones_initializer:             |   Initializer that generates tensors initialized to 1.
class random_normal_initializer:    |   Initializer that generates tensors with a normal distribution.
class random_uniform_initializer:   |   Initializer that generates tensors with a uniform distribution.
class zeros_initializer:            |   Initializer that generates tensors initialized to 0.



## Functions
name                                    |   comment
-                                       |   -
Assert:                                 |   Asserts that the given condition is true.
abs:                                    |   Computes the absolute value of a tensor.
acos:                                   |   Computes acos of x element-wise.
acosh:                                  |   Computes inverse hyperbolic cosine of x element-wise.
add:                                    |   Returns x + y element-wise.
add_n:                                  |   Adds all input tensors element-wise.
argmax:                                 |   Returns the index with the largest value across axes of a tensor.
argmin:                                 |   Returns the index with the smallest value across axes of a tensor.
argsort:                                |   Returns the indices of a tensor that give its sorted order along an axis.
as_dtype:                               |   Converts the given type_value to a DType.
as_string:                              |   Converts each entry in the given tensor to strings.
asin:                                   |   Computes the trignometric inverse sine of x element-wise.
asinh:                                  |   Computes inverse hyperbolic sine of x element-wise.
assert_equal:                           |   Assert the condition x == y holds element-wise.
assert_greater:                         |   Assert the condition x > y holds element-wise.
assert_less:                            |   Assert the condition x < y holds element-wise.
assert_rank:                            |   Assert that x has rank equal to rank.
atan:                                   |   Computes the trignometric inverse tangent of x element-wise.
atan2:                                  |   Computes arctangent of y/x element-wise, respecting signs of the arguments.
atanh:                                  |   Computes inverse hyperbolic tangent of x element-wise.
batch_to_space:                         |   BatchToSpace for N-D tensors of type T.
bitcast:                                |   Bitcasts a tensor from one type to another without copying data.
boolean_mask:                           |   Apply boolean mask to tensor.
broadcast_dynamic_shape:                |   Computes the shape of a broadcast given symbolic shapes.
broadcast_static_shape:                 |   Computes the shape of a broadcast given known shapes.
broadcast_to:                           |   Broadcast an array for a compatible shape.
case:                                   |   Create a case operation.
cast:                                   |   Casts a tensor to a new type.
clip_by_global_norm:                    |   Clips values of multiple tensors by the ratio of the sum of their norms.
clip_by_norm:                           |   Clips tensor values to a maximum L2-norm.
clip_by_value:                          |   Clips tensor values to a specified min and max.
complex:                                |   Converts two real numbers to a complex number.
concat:                                 |   Concatenates tensors along one dimension.
cond:                                   |   Return true_fn() if the predicate pred is true else false_fn().
constant:                               |   Creates a constant tensor.
control_dependencies:                   |   Wrapper for Graph.control_dependencies() using the default graph.
convert_to_tensor:                      |   Converts the given value to a Tensor.
cos:                                    |   Computes cos of x element-wise.
cosh:                                   |   Computes hyperbolic cosine of x element-wise.
cumsum:                                 |   Compute the cumulative sum of the tensor x along axis.
custom_gradient:                        |   Decorator to define a function with a custom gradient.
device:                                 |   Specifies the device for ops created/executed in this context.
divide:                                 |   Computes Python style division of x by y.
dynamic_partition:                      |   Partitions data into num_partitions tensors using indices from partitions.
dynamic_stitch:                         |   Interleave the values from the data tensors into a single tensor.
edit_distance:                          |   Computes the Levenshtein distance between sequences.
einsum:                                 |   A generalized contraction between tensors of arbitrary dimension.
ensure_shape:                           |   Updates the shape of a tensor and checks at runtime that the shape holds.
equal:                                  |   Returns the truth value of (x == y) element-wise.
executing_eagerly:                      |   Returns True if the current thread has eager execution enabled.
exp:                                    |   Computes exponential of x element-wise. \(y = e^x\).
expand_dims:                            |   Inserts a dimension of 1 into a tensor's shape.
extract_volume_patches:                 |   Extract patches from input and put them in the "depth" output dimension. 3D extension of extract_image_patches.
eye:                                    |   Construct an identity matrix, or a batch of matrices.
fill:                                   |   Creates a tensor filled with a scalar value.
fingerprint:                            |   Generates fingerprint values.
floor:                                  |   Returns element-wise largest integer not greater than x.
foldl:                                  |   foldl on the list of tensors unpacked from elems on dimension 0.
foldr:                                  |   foldr on the list of tensors unpacked from elems on dimension 0.
function:                               |   Creates a callable TensorFlow graph from a Python function.
gather:                                 |   Gather slices from params axis axis according to indices.
gather_nd:                              |   Gather slices from params into a Tensor with shape specified by indices.
get_logger:                             |   Return TF logger instance.
get_static_value:                       |   Returns the constant value of the given tensor, if efficiently calculable.
grad_pass_through:                      |   Creates a grad-pass-through op with the forward behavior provided in f.
gradients:                              |   Constructs symbolic derivatives of sum of ys w.r.t. x in xs.
greater:                                |   Returns the truth value of (x > y) element-wise.
greater_equal:                          |   Returns the truth value of (x >= y) element-wise.
group:                                  |   Create an op that groups multiple operations.
guarantee_const:                        |   Gives a guarantee to the TF runtime that the input tensor is a constant.
hessians:                               |   Constructs the Hessian of sum of ys with respect to x in xs.
histogram_fixed_width:                  |   Return histogram of values.
histogram_fixed_width_bins:             |   Bins the given values for use in a histogram.
identity:                               |   Return a tensor with the same shape and contents as input.
identity_n:                             |   Returns a list of tensors with the same shapes and contents as the input
import_graph_def:                       |   Imports the graph from graph_def into the current default Graph. (deprecated arguments)
init_scope:                             |   A context manager that lifts ops out of control-flow scopes and function-building graphs.
is_tensor:                              |   Checks whether x is a tensor or "tensor-like".
less:                                   |   Returns the truth value of (x < y) element-wise.
less_equal:                             |   Returns the truth value of (x <= y) element-wise.
linspace:                               |   Generates values in an interval.
load_library:                           |   Loads a TensorFlow plugin.
load_op_library:                        |   Loads a TensorFlow plugin, containing custom ops and kernels.
logical_and:                            |   Returns the truth value of x AND y element-wise.
logical_not:                            |   Returns the truth value of NOT x element-wise.
logical_or:                             |   Returns the truth value of x OR y element-wise.
make_ndarray:                           |   Create a numpy ndarray from a tensor.
make_tensor_proto:                      |   Create a TensorProto.
map_fn:                                 |   map on the list of tensors unpacked from elems on dimension 0.
matmul:                                 |   Multiplies matrix a by matrix b, producing a * b.
matrix_square_root:                     |   Computes the matrix square root of one or more square matrices:
maximum:                                |   Returns the max of x and y (i.e. x > y ? x : y) element-wise.
meshgrid:                               |   Broadcasts parameters for evaluation on an N-D grid.
minimum:                                |   Returns the min of x and y (i.e. x < y ? x : y) element-wise.
multiply:                               |   Returns x * y element-wise.
negative:                               |   Computes numerical negative value element-wise.
no_gradient:                            |   Specifies that ops of type op_type is not differentiable.
no_op:                                  |   Does nothing. Only useful as a placeholder for control edges.
nondifferentiable_batch_func            |   tion: Batches the computation done by the decorated function.
norm:                                   |   Computes the norm of vectors, matrices, and tensors.
not_equal:                              |   Returns the truth value of (x != y) element-wise.
numpy_function:                         |   Wraps a python function and uses it as a TensorFlow op.
one_hot:                                |   Returns a one-hot tensor.
ones:                                   |   Creates a tensor with all elements set to 1.
ones_like:                              |   Creates a tensor with all elements set to zero.
pad:                                    |   Pads a tensor.
parallel_stack:                         |   Stacks a list of rank-R tensors into one rank-(R+1) tensor in parallel.
pow:                                    |   Computes the power of one value to another.
print:                                  |   Print the specified inputs.
py_function:                            |   Wraps a python function into a TensorFlow op that executes it eagerly.
range:                                  |   Creates a sequence of numbers.
rank:                                   |   Returns the rank of a tensor.
realdiv:                                |   Returns x / y element-wise for real types.
recompute_grad:                         |   An eager-compatible version of recompute_grad.
reduce_all:                             |   Computes the "logical and" of elements across dimensions of a tensor.
reduce_any:                             |   Computes the "logical or" of elements across dimensions of a tensor.
reduce_logsumexp:                       |   Computes log(sum(exp(elements across dimensions of a tensor))).
reduce_max:                             |   Computes the maximum of elements across dimensions of a tensor.
reduce_mean:                            |   Computes the mean of elements across dimensions of a tensor.
reduce_min:                             |   Computes the minimum of elements across dimensions of a tensor.
reduce_prod:                            |   Computes the product of elements across dimensions of a tensor.
reduce_sum:                             |   Computes the sum of elements across dimensions of a tensor.
register_tensor_conversion_function:    |   Registers a function for converting objects of base_type to Tensor.
required_space_to_batch_paddings:       |   Calculate padding required to make block_shape divide input_shape.
reshape:                                |   Reshapes a tensor.
reverse:                                |   Reverses specific dimensions of a tensor.
reverse_sequence:                       |   Reverses variable length slices.
roll:                                   |   Rolls the elements of a tensor along an axis.
round:                                  |   Rounds the values of a tensor to the nearest integer, element-wise.
saturate_cast:                          |   Performs a safe saturating cast of value to dtype.
scalar_mul:                             |   Multiplies a scalar times a Tensor or IndexedSlices object.
scan:                                   |   scan on the list of tensors unpacked from elems on dimension 0.
scatter_nd:                             |   Scatter updates into a new tensor according to indices.
searchsorted:                           |   Searches input tensor for values on the innermost dimension.
sequence_mask:                          |   Returns a mask tensor representing the first N positions of each cell.
shape:                                  |   Returns the shape of a tensor.
shape_n:                                |   Returns shape of tensors.
sigmoid:                                |   Computes sigmoid of x element-wise.
sign:                                   |   Returns an element-wise indication of the sign of a number.
sin:                                    |   Computes sine of x element-wise.
sinh:                                   |   Computes hyperbolic sine of x element-wise.
size                                    |   
slice:                                  |   Extracts a slice from a tensor.
sort:                                   |   Sorts a tensor.
space_to_batch:                         |   SpaceToBatch for N-D tensors of type T.
space_to_batch_nd:                      |   SpaceToBatch for N-D tensors of type T.
split:                                  |   Splits a tensor into sub tensors.
sqrt:                                   |   Computes square root of x element-wise.
square:                                 |   Computes square of x element-wise.
squeeze:                                |   Removes dimensions of size 1 from the shape of a tensor.
stack:                                  |   Stacks a list of rank-R tensors into one rank-(R+1) tensor.
stop_gradient:                          |   Stops gradient computation.
strided_slice:                          |   Extracts a strided slice of a tensor (generalized python array indexing).
subtract:                               |   Returns x - y element-wise.
switch_case:                            |   Create a switch/case operation, i.e. an integer-indexed conditional.
tan:                                    |   Computes tan of x element-wise.
tanh:                                   |   Computes hyperbolic tangent of x element-wise.
tensor_scatter_nd_add:                  |   Adds sparse updates to an existing tensor according to indices.
tensor_scatter_nd_sub:                  |   Subtracts sparse updates from an existing tensor according to indices.
tensor_scatter_nd_update:               |   Scatter updates into an existing tensor according to indices.
tensordot:                              |   Tensor contraction of a and b along specified axes.
tile:                                   |   Constructs a tensor by tiling a given tensor.
timestamp:                              |   Provides the time since epoch in seconds.
transpose:                              |   Transposes a.
truediv:                                |   Divides x / y elementwise (using Python 3 division operator semantics).
truncatediv:                            |   Returns x / y element-wise for integer types.
truncatemod:                            |   Returns element-wise remainder of division. This emulates C semantics in that
tuple:                                  |   Group tensors together.
unique:                                 |   Finds unique elements in a 1-D tensor.
unique_with_counts:                     |   Finds unique elements in a 1-D tensor.
unravel_index:                          |   Converts a flat index or array of flat indices into a tuple of
unstack:                                |   Unpacks the given dimension of a rank-R tensor into rank-(R-1) tensors.
variable_creator_scope:                 |   Scope which defines a variable creation function to be used by variable().
vectorized_map:                         |   Parallel map on the list of tensors unpacked from elems on dimension 0.
where:                                  |   Return the elements, either from x or y, depending on the condition.
while_loop:                             |   Repeat body while the condition cond is true.
zeros:                                  |   Creates a tensor with all elements set to zero.
zeros_like:                             |   Creates a tensor with all elements set to zero.


## Other Members
name            |
-               |
bfloat16        |
bool            |
complex128      |
complex64       |
double          |
float16         |
float32         |
float64         |
half            |
int16           |
int32           |
int64           |
int8            |
newaxis = None  |
qint16          |
qint32          |
qint8           |
quint16         |
quint8          |
resource        |
string          |
uint16          |
uint32          |
uint64          |
uint8           |
variant         |

